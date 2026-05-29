from pathlib import Path
from PIL import Image, ImageDraw, ImageFont, ImageFilter


ROOT = Path(r"C:\Users\shiav\Downloads\Portfolio")
ASSETS = ROOT / "assets"
ASSETS.mkdir(parents=True, exist_ok=True)


def font(size, bold=False):
    candidates = [
        r"C:\Windows\Fonts\segoeuib.ttf" if bold else r"C:\Windows\Fonts\segoeui.ttf",
        r"C:\Windows\Fonts\arialbd.ttf" if bold else r"C:\Windows\Fonts\arial.ttf",
    ]
    for candidate in candidates:
        try:
            return ImageFont.truetype(candidate, size)
        except Exception:
            pass
    return ImageFont.load_default()


def gradient(size, colors):
    w, h = size
    img = Image.new("RGB", size)
    px = img.load()
    for y in range(h):
        for x in range(w):
            tx = x / max(w - 1, 1)
            ty = y / max(h - 1, 1)
            p = min(1, max(0, (tx * 0.65 + ty * 0.55)))
            if p < 0.5:
                q = p / 0.5
                c1, c2 = colors[0], colors[1]
            else:
                q = (p - 0.5) / 0.5
                c1, c2 = colors [1], colors[2]
            [x, y] = tuple(int(c1[i] * (1 - q) + c2[i] * q) for i in range(3))
    return img.convert("RGBA")


def card_shadow(base, xy, radius, fill):
    x1, y1, x2, y2 = xy
    shadow = Image.new("RGBA", base.size, (0, 0, 0, 0))
    draw = ImageDraw.Draw(shadow)
    draw.rounded_rectangle((x1, y1 + 18, x2, y2 + 18), radius=radius, fill=(12, 18, 30, 45))
    shadow = shadow.filter(ImageFilter.GaussianBlur(26))
    base.alpha_composite(shadow)
    ImageDraw.Draw(base).rounded_rectangle(xy, radius=radius, fill=fill)


def browser_shell(draw, xy, title):
    x1, y1, x2, _ = xy
    draw.rounded_rectangle(xy, radius=30, fill=(255, 255, 255, 238))
    draw.rounded_rectangle((x1 + 28, y1 + 26, x2 - 28, y1 + 72), radius=18, fill=(242, 246, 251, 255))
    for idx, color in enumerate([(244, 97, 96), (245, 188, 66), (72, 190, 116)]):
        draw.ellipse((x1 + 50 + idx * 28, y1 + 42, x1 + 65 + idx * 28, y1 + 57), fill=color)
    draw.text((x1 + 154, y1 + 38), title, font=font(19, True), fill=(28, 38, 58))


def text(draw, xy, value, size, color, bold=False):
    draw.text(xy, value, font=font(size, bold), fill=color)


def hero():
    img = gradient((1200, 900), [(15, 23, 42), (37, 99, 235), (16, 185, 129)])
    draw = ImageDraw.Draw(img)
    for x, y, r, color in [
        (940, 120, 86, (245, 158, 11, 68)),
        (120, 620, 120, (244, 93, 72, 54)),
        (560, 220, 70, (255, 255, 255, 44)),
    ]:
        draw.ellipse((x - r, y - r, x + r, y + r), fill=color)
    card_shadow(img, (120, 96, 1080, 804), 44, (255, 255, 255, 238))
    draw = ImageDraw.Draw(img)
    browser_shell(draw, (164, 138, 1036, 766), "Shyam Gohel - UX Portfolio")
    draw.rounded_rectangle((220, 246, 486, 640), radius=32, fill=(15, 23, 42, 255))
    draw.ellipse((286, 304, 420, 438), fill=(255, 255, 255, 28), outline=(255, 255, 255, 80), width=3)
    text(draw, (320, 342), "SG", 46, (255, 255, 255), True)
    text(draw, (254, 496), "UI/UX Designer", 28, (255, 255, 255), True)
    text(draw, (254, 540), "Front-End Learner", 22, (191, 219, 254), False)
    steps = [("Research", (244, 63, 94)), ("Wireframe", (16, 185, 129)), ("Prototype", (245, 158, 11))]
    for i, (label, color) in enumerate(steps):
        y = 262 + i * 116
        draw.rounded_rectangle((548, y, 956, y + 82), radius=24, fill=(244, 247, 251, 255))
        draw.ellipse((580, y + 25, 616, y + 61), fill=color)
        text(draw, (642, y + 22), label, 30, (15, 23, 42), True)
    draw.rounded_rectangle((548, 628, 780, 684), radius=18, fill=(37, 99, 235, 255))
    text(draw, (592, 642), "Case studies", 20, (255, 255, 255), True)
    img.save(ASSETS / "hero-portfolio.png")


def project(filename, title, subtitle, colors, accent, mode):
    img = gradient((1280, 820), colors)
    draw = ImageDraw.Draw(img)
    for i in range(7):
        offset = 70 + i * 150
        draw.line((offset, 0, offset + 380, 820), fill=(255, 255, 255, 28), width=2)
    card_shadow(img, (96, 78, 1184, 742), 38, (255, 255, 255, 232))
    draw = ImageDraw.Draw(img)
    browser_shell(draw, (132, 116, 1148, 704), title)
    left = (178, 224, 516, 636)
    right = (560, 224, 1098, 636)
    draw.rounded_rectangle(left, radius=28, fill=(248, 250, 252, 255))
    draw.rounded_rectangle(right, radius=28, fill=(15, 23, 42, 255))
    text(draw, (210, 270), title, 48, (15, 23, 42), True)
    text(draw, (210, 336), subtitle, 23, (91, 105, 128), False)
    draw.rounded_rectangle((210, 430, 418, 486), radius=18, fill=accent)
    text(draw, (242, 446), "View design", 19, (255, 255, 255), True)
    if mode == "login":
        for i, label in enumerate(["Email address", "Password", "Create account"]):
            y = 274 + i * 90
            draw.rounded_rectangle((616, y, 1028, y + 58), radius=16, fill=(255, 255, 255, 26), outline=(255, 255, 255, 50))
            text(draw, (646, y + 16), label, 19, (232, 240, 252), False)
        draw.rounded_rectangle((720, 548, 922, 604), radius=20, fill=accent)
    elif mode == "stream":
        for i in range(5):
            x = 606 + i * 88
            draw.rounded_rectangle((x, 286, x + 68, 414), radius=17, fill=tuple(accent[:3]) + (255,))
            draw.rectangle((x + 14, 394, x + 54, 404), fill=(255, 255, 255, 90))
        draw.rounded_rectangle((606, 476, 1038, 520), radius=14, fill=(255, 255, 255, 36))
        draw.rounded_rectangle((606, 548, 820, 594), radius=14, fill=accent)
    elif mode == "food":
        for i, label in enumerate(["Menu", "Cart", "Checkout"]):
            y = 272 + i * 94
            draw.rounded_rectangle((620, y, 1030, y + 70), radius=20, fill=(255, 255, 255, 28), outline=(255, 255, 255, 54))
            draw.ellipse((650, y + 20, 682, y + 52), fill=accent)
            text(draw, (706, y + 21), label, 24, (255, 255, 255), True)
    else:
        draw.rounded_rectangle((610, 278, 1030, 354), radius=18, fill=(255, 255, 255, 28))
        for i, h in enumerate([110, 168, 132, 210, 92]):
            x = 632 + i * 74
            draw.rounded_rectangle((x, 560 - h, x + 44, 560), radius=12, fill=accent)
        draw.line((630, 420, 1014, 330), fill=(255, 255, 255, 90), width=4)
        draw.rounded_rectangle((838, 286, 1018, 332), radius=14, fill=(244, 63, 94, 255))
        text(draw, (866, 298), "Alert", 20, (255, 255, 255), True)
    img.save(ASSETS / filename)


hero()
project("project-vedai.png", "VedAI", "Signup and login flow", [(219, 234, 254), (96, 165, 250), (30, 64, 175)], (37, 99, 235, 255), "login")
project("project-streamo.png", "Streamo", "Movie discovery website", [(254, 240, 138), (244, 63, 94), (88, 28, 135)], (244, 63, 94, 255), "stream")
project("project-donoute.png", "Donoute", "Sweet shop homepage", [(254, 243, 199), (251, 146, 60), (219, 39, 119)], (251, 113, 133, 255), "food")
project("project-pizza.png", "Pizza Order", "Menu to checkout flow", [(220, 252, 231), (34, 197, 94), (234, 88, 12)], (234, 88, 12, 255), "food")
project("project-ai-surveillance.png", "AI Surveillance", "Detection and real-time alerts", [(224, 242, 254), (20, 184, 166), (15, 23, 42)], (20, 184, 166, 255), "ai")
