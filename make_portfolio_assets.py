from pathlib import Path
from PIL import Image, ImageDraw, ImageFont, ImageFilter


ROOT = Path(__file__).resolve().parent
ASSETS = ROOT / "assets"
LEGACY_ASSETS = ROOT / "Portfolio-redesigned" / "Portfolio" / "assets"
ASSETS.mkdir(parents=True, exist_ok=True)


def font(size, bold=False, serif=False):
    names = [
        r"C:\Windows\Fonts\georgiab.ttf" if serif and bold else r"C:\Windows\Fonts\georgia.ttf" if serif else "",
        r"C:\Windows\Fonts\segoeuib.ttf" if bold else r"C:\Windows\Fonts\segoeui.ttf",
        r"C:\Windows\Fonts\arialbd.ttf" if bold else r"C:\Windows\Fonts\arial.ttf",
    ]
    for name in names:
        if not name:
            continue
        try:
            return ImageFont.truetype(name, size)
        except OSError:
            pass
    return ImageFont.load_default()


def mix(a, b, t):
    return tuple(int(a[i] * (1 - t) + b[i] * t) for i in range(3))


def gradient(size, stops):
    w, h = size
    img = Image.new("RGB", size)
    px = img.load()
    for y in range(h):
        for x in range(w):
            dx = x / max(w - 1, 1)
            dy = y / max(h - 1, 1)
            p = min(0.999, max(0, dx * 0.62 + dy * 0.5))
            scaled = p * (len(stops) - 1)
            idx = int(scaled)
            t = scaled - idx
            px[x, y] = mix(stops[idx], stops[min(idx + 1, len(stops) - 1)], t)
    return img.convert("RGBA")


def rounded_mask(size, radius):
    mask = Image.new("L", size, 0)
    ImageDraw.Draw(mask).rounded_rectangle((0, 0, size[0] - 1, size[1] - 1), radius=radius, fill=255)
    return mask


def card(base, box, radius=32, fill=(255, 255, 255, 235), shadow=True):
    x1, y1, x2, y2 = box
    if shadow:
        layer = Image.new("RGBA", base.size, (0, 0, 0, 0))
        d = ImageDraw.Draw(layer)
        d.rounded_rectangle((x1, y1 + 22, x2, y2 + 22), radius=radius, fill=(9, 13, 24, 58))
        base.alpha_composite(layer.filter(ImageFilter.GaussianBlur(30)))
    ImageDraw.Draw(base).rounded_rectangle(box, radius=radius, fill=fill)


def text(draw, xy, value, size, fill, bold=False, serif=False, anchor=None):
    draw.text(xy, value, font=font(size, bold=bold, serif=serif), fill=fill, anchor=anchor)


def fit_cover(img, size):
    target_w, target_h = size
    src_w, src_h = img.size
    scale = max(target_w / src_w, target_h / src_h)
    resized = img.resize((int(src_w * scale), int(src_h * scale)), Image.LANCZOS)
    left = (resized.width - target_w) // 2
    top = max(0, (resized.height - target_h) // 3)
    return resized.crop((left, top, left + target_w, top + target_h))


def make_profile():
    source = LEGACY_ASSETS / "profile-portrait-classic.jpg"
    canvas = gradient((900, 1120), [(17, 24, 39), (28, 115, 120), (249, 115, 22)])
    draw = ImageDraw.Draw(canvas)
    for x, y, r, c in [
        (125, 180, 92, (255, 198, 41, 80)),
        (760, 210, 150, (20, 184, 166, 78)),
        (720, 930, 130, (255, 255, 255, 48)),
    ]:
        draw.ellipse((x - r, y - r, x + r, y + r), fill=c)

    if source.exists() and source.stat().st_size:
        portrait = Image.open(source).convert("RGB")
        portrait = fit_cover(portrait, (690, 860)).filter(ImageFilter.UnsharpMask(radius=1.5, percent=110, threshold=3))
        portrait = portrait.convert("RGBA")
        overlay = Image.new("RGBA", portrait.size, (0, 0, 0, 0))
        od = ImageDraw.Draw(overlay)
        od.rectangle((0, 0, portrait.width, portrait.height), fill=(10, 18, 30, 18))
        od.rectangle((0, portrait.height - 180, portrait.width, portrait.height), fill=(10, 18, 30, 48))
        portrait.alpha_composite(overlay)
        mask = rounded_mask(portrait.size, 46)
        card(canvas, (80, 95, 820, 1012), 58, (255, 255, 255, 42), True)
        canvas.paste(portrait, (105, 120), mask)
    else:
        card(canvas, (110, 130, 790, 990), 58, (255, 255, 255, 38), True)
        draw.ellipse((260, 210, 640, 590), fill=(245, 230, 210, 255))
        draw.rounded_rectangle((205, 560, 695, 955), radius=90, fill=(31, 41, 55, 255))
        text(draw, (450, 405), "SG", 130, (17, 24, 39), True, True, "mm")

    draw = ImageDraw.Draw(canvas)
    draw.rounded_rectangle((132, 835, 548, 930), radius=28, fill=(255, 255, 255, 234))
    text(draw, (164, 858), "Shyam Gohel", 34, (17, 24, 39), True, True)
    text(draw, (164, 902), "UI/UX Designer", 20, (68, 83, 101), True)
    canvas.convert("RGB").save(ASSETS / "profile-portrait-ai.jpg", quality=94)


def browser_frame(draw, box, title):
    x1, y1, x2, y2 = box
    draw.rounded_rectangle(box, radius=36, fill=(255, 255, 255, 232))
    draw.rounded_rectangle((x1 + 30, y1 + 28, x2 - 30, y1 + 82), radius=20, fill=(241, 245, 249, 255))
    for i, c in enumerate([(239, 68, 68), (245, 158, 11), (34, 197, 94)]):
        draw.ellipse((x1 + 58 + i * 30, y1 + 48, x1 + 74 + i * 30, y1 + 64), fill=c)
    text(draw, (x1 + 162, y1 + 43), title, 21, (31, 41, 55), True)


def make_hero():
    img = gradient((1440, 1024), [(10, 15, 28), (19, 78, 74), (239, 120, 70)])
    draw = ImageDraw.Draw(img)
    for i in range(16):
        x = 60 + i * 92
        draw.line((x, 0, x + 420, 1024), fill=(255, 255, 255, 18), width=2)
    for x, y, r, c in [
        (1110, 170, 170, (251, 191, 36, 78)),
        (240, 800, 180, (45, 212, 191, 68)),
        (690, 210, 96, (255, 255, 255, 50)),
    ]:
        draw.ellipse((x - r, y - r, x + r, y + r), fill=c)

    card(img, (105, 94, 1335, 898), 54, (255, 255, 255, 226), True)
    browser_frame(draw, (150, 138, 1290, 850), "portfolio.shyamgohel.design")
    draw.rounded_rectangle((215, 245, 590, 755), radius=42, fill=(15, 23, 42, 255))
    draw.rounded_rectangle((252, 286, 552, 458), radius=34, fill=(20, 184, 166, 255))
    text(draw, (285, 326), "Design", 56, (255, 255, 255), True, True)
    text(draw, (286, 395), "Systems", 38, (204, 251, 241), True)
    for y, label, color in [
        (520, "Wireframes", (251, 191, 36, 255)),
        (595, "Prototype", (244, 114, 182, 255)),
        (670, "Frontend", (96, 165, 250, 255)),
    ]:
        draw.rounded_rectangle((252, y, 552, y + 48), radius=18, fill=(255, 255, 255, 235))
        draw.ellipse((277, y + 15, 295, y + 33), fill=color)
        text(draw, (315, y + 12), label, 21, (31, 41, 55), True)

    draw.rounded_rectangle((670, 250, 1185, 390), radius=34, fill=(241, 245, 249, 255))
    text(draw, (705, 282), "Selected project flow", 31, (15, 23, 42), True, True)
    text(draw, (705, 332), "Research -> UX -> UI -> responsive build", 22, (71, 85, 105), False)
    for i, (label, color) in enumerate([
        ("Research", (20, 184, 166, 255)),
        ("UX", (251, 146, 60, 255)),
        ("UI", (244, 114, 182, 255)),
        ("Code", (37, 99, 235, 255)),
    ]):
        x = 690 + i * 118
        draw.rounded_rectangle((x, 480, x + 82, 690), radius=24, fill=color)
        text(draw, (x + 41, 720), label, 20, (31, 41, 55), True, anchor="mm")
    draw.line((728, 454, 1098, 438), fill=(15, 23, 42, 110), width=5)
    draw.rounded_rectangle((1010, 570, 1188, 640), radius=24, fill=(15, 23, 42, 255))
    text(draw, (1099, 605), "Live UI", 24, (255, 255, 255), True, anchor="mm")
    img.save(ASSETS / "hero-portfolio.png")


def make_project(filename, title, subtitle, colors, accent, mode):
    img = gradient((1280, 820), colors)
    draw = ImageDraw.Draw(img)
    for i in range(8):
        x = -120 + i * 190
        draw.rounded_rectangle((x, 80 + (i % 2) * 34, x + 118, 760), radius=54, fill=(255, 255, 255, 26))
    card(img, (82, 68, 1198, 750), 48, (255, 255, 255, 230), True)
    browser_frame(draw, (126, 110, 1154, 708), title)
    draw.rounded_rectangle((172, 220, 506, 630), radius=34, fill=(248, 250, 252, 255))
    text(draw, (210, 270), title, 48, (15, 23, 42), True, True)
    text(draw, (210, 335), subtitle, 23, (71, 85, 105))
    draw.rounded_rectangle((210, 514, 430, 574), radius=22, fill=accent)
    text(draw, (320, 544), "Open case", 20, (255, 255, 255), True, anchor="mm")

    panel = (565, 220, 1098, 630)
    draw.rounded_rectangle(panel, radius=34, fill=(15, 23, 42, 255))
    if mode == "login":
        for i, label in enumerate(["Email", "Password", "Confirm"]):
            y = 282 + i * 78
            draw.rounded_rectangle((630, y, 1035, y + 52), radius=16, fill=(255, 255, 255, 30), outline=(255, 255, 255, 52))
            text(draw, (658, y + 14), label, 19, (226, 232, 240))
        draw.rounded_rectangle((740, 545, 940, 596), radius=18, fill=accent)
    elif mode == "stream":
        for i in range(5):
            x = 620 + i * 86
            draw.rounded_rectangle((x, 275, x + 66, 420), radius=18, fill=accent)
            draw.rectangle((x + 13, 395, x + 53, 405), fill=(255, 255, 255, 100))
        draw.rounded_rectangle((625, 492, 1030, 536), radius=14, fill=(255, 255, 255, 40))
        draw.rounded_rectangle((625, 558, 840, 600), radius=14, fill=accent)
    elif mode == "food":
        for i, label in enumerate(["Menu", "Cart", "Pay"]):
            y = 282 + i * 86
            draw.rounded_rectangle((625, y, 1032, y + 62), radius=20, fill=(255, 255, 255, 30))
            draw.ellipse((652, y + 17, 680, y + 45), fill=accent)
            text(draw, (705, y + 16), label, 24, (255, 255, 255), True)
    else:
        for i, h in enumerate([118, 176, 132, 224, 98]):
            x = 645 + i * 72
            draw.rounded_rectangle((x, 560 - h, x + 46, 560), radius=13, fill=accent)
        draw.line((640, 440, 1008, 325), fill=(255, 255, 255, 100), width=5)
        draw.rounded_rectangle((842, 278, 1028, 332), radius=18, fill=(239, 68, 68, 255))
        text(draw, (935, 305), "Alert", 22, (255, 255, 255), True, anchor="mm")
    img.save(ASSETS / filename)


def make_favicon():
    svg = """<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><rect width="64" height="64" rx="14" fill="#101827"/><path d="M17 43c4 4 10 6 16 6 9 0 15-4 15-11 0-14-24-7-24-15 0-3 3-5 8-5 4 0 8 1 12 4l3-7c-4-3-9-4-15-4-10 0-16 5-16 12 0 14 24 8 24 15 0 3-3 4-8 4-5 0-9-2-12-5l-3 6z" fill="#f7f4ee"/><circle cx="48" cy="17" r="6" fill="#14b8a6"/></svg>"""
    (ASSETS / "favicon.svg").write_text(svg, encoding="utf-8")


def main():
    make_profile()
    make_hero()
    make_project("project-vedai.png", "VedAI", "Signup and login flow", [(219, 234, 254), (59, 130, 246), (15, 23, 42)], (37, 99, 235, 255), "login")
    make_project("project-streamo.png", "Streamo", "Movie discovery website", [(253, 224, 71), (244, 63, 94), (67, 20, 87)], (244, 63, 94, 255), "stream")
    make_project("project-donoute.png", "Donoute", "Sweet shop homepage", [(254, 243, 199), (251, 146, 60), (219, 39, 119)], (251, 113, 133, 255), "food")
    make_project("project-pizza.png", "Pizza Order", "Menu to checkout flow", [(220, 252, 231), (34, 197, 94), (234, 88, 12)], (234, 88, 12, 255), "food")
    make_project("project-ai-surveillance.png", "AI Vision", "Detection and real-time alerts", [(224, 242, 254), (20, 184, 166), (15, 23, 42)], (20, 184, 166, 255), "ai")
    make_favicon()


if __name__ == "__main__":
    main()
