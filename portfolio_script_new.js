/* =========================================================
   CONTENT — sourced directly from Shyam's resume.
   Update this object to change site content; nothing here
   is invented (no fake clients, stats, or testimonials).
   ========================================================= */
const data = {
  socials: {
    email: "shivamgohel477@gmail.com",
    phone: "+91 93276 72194",
    linkedin: "https://www.linkedin.com/in/shyamgohel14/",
    // No public GitHub profile was provided — add one here to show it in the nav/footer.
    github: "",
  },

  aboutStats: [
    { value: "5+", label: "Design projects" },
    { value: "3", label: "Internships" },
    { value: "12", label: "Weeks AI/ML training" },
  ],

  skills: [
    {
      title: "UI/UX Design",
      tags: ["UI/UX Design", "Wireframing", "Screen Layouts", "User Flows", "Visual Design Basics"],
    },
    {
      title: "Frontend Development",
      tags: ["HTML", "CSS", "JavaScript", "Responsive Web Design"],
    },
    {
      title: "Design & Productivity Tools",
      tags: ["Figma", "Canva", "Microsoft Office", "Microsoft Copilot"],
    },
    {
      title: "AI & Emerging Technology",
      tags: ["Python", "OpenCV", "Machine Learning Fundamentals"],
    },
  ],

  projects: [
    {
      image: "./assets/project-vedai.png",
      alt: "VedAI login and signup screen design",
      tag: "Figma · Login Flow",
      title: "Login & Signup — VedAI Startup",
      role: "UI Designer",
      tools: ["Figma"],
      description:
        "Clean signup and login screens for a tech startup, designed for focused account entry and a calm visual hierarchy.",
      features: ["Simple, focused form layout", "Startup-appropriate visual style", "Clear, single-path user action"],
      linkLabel: "View on Figma",
      linkUrl:
        "https://www.figma.com/design/xvHbxAP08ZbzRtIqwj936Q/Login---SignUp-Web---Mobile-App-Design--Community-?m=auto&t=qKEcTSlqikgPKREx-6",
    },
    {
      image: "./assets/project-streamo.png",
      alt: "Streamo movie streaming website landing page design",
      tag: "Figma · Entertainment",
      title: "Streamo — Movie Streaming Website",
      role: "UI Designer",
      tools: ["Figma"],
      description:
        "A movie discovery landing page concept focused on browsing, previewing, and finding content quickly.",
      features: ["Content-first landing layout", "Clear browsing and preview flow", "Modern entertainment-brand styling"],
      linkLabel: "View on Figma",
      linkUrl: "https://www.figma.com/design/z7SvQwwzVuehzIlB3NMpuh/Untitled?m=auto&t=qKEcTSlqikgPKREx-6",
    },
    {
      image: "./assets/project-donoute.png",
      alt: "Donoute donut shop website homepage design",
      tag: "Figma · Food Brand",
      title: "Donoute — Donut Shop Website",
      role: "UI Designer",
      tools: ["Figma"],
      description:
        "A colorful homepage concept for a sweets and donut shop, built around friendly, product-focused sections.",
      features: ["Warm, brand-driven color palette", "Product-first homepage sections", "Friendly, approachable visual tone"],
      linkLabel: "View on Figma",
      linkUrl: "https://www.figma.com/design/aCbPpCrjHgn58MWsPrultc/Untitled?m=auto&t=qKEcTSlqikgPKREx-6",
    },
    {
      image: "./assets/project-pizza.png",
      alt: "Pizza order website interface design",
      tag: "Figma · Ordering Flow",
      title: "Pizza Order Website",
      role: "UI Designer",
      tools: ["Figma"],
      description:
        "A food-ordering interface covering menu browsing, cart review, and checkout, designed for quick, easy scanning.",
      features: ["Menu browsing screens", "Cart review step", "Streamlined checkout flow"],
      linkLabel: "View on Figma",
      linkUrl: "https://www.figma.com/design/XVJOjavLv7kW24LWFuddyV/Untitled?m=auto&t=qKEcTSlqikgPKREx-6",
    },
    {
      image: "./assets/project-ai-surveillance.png",
      alt: "AI-powered border defence and surveillance project interface",
      tag: "Python · AI/ML · OpenCV",
      title: "AI-Powered Border Defence & Surveillance",
      role: "Developer",
      tools: ["Python", "OpenCV", "Machine Learning"],
      description:
        "A camera-feed monitoring concept that applies Python, OpenCV, and machine learning ideas to detection and alerting.",
      features: [
        "Video frame processing with OpenCV",
        "Machine learning logic for threat detection",
        "Project flow from camera input to real-time alert",
      ],
      // Local prototype — no public link available yet.
      linkLabel: "",
      linkUrl: "",
    },
  ],

  moreLinks: [
    { label: "Modern Landing Page UI", url: "https://www.figma.com/design/0nN9qbyrNWiQZas6i7ozSq/Untitled?m=auto&t=qKEcTSlqikgPKREx-6" },
    { label: "Multi-section Web Layout", url: "https://www.figma.com/design/7DzAmz3DdW4IYMZ6qgF9oe/Untitled?m=auto&t=qKEcTSlqikgPKREx-6" },
    { label: "Puma Landing Page", url: "https://www.figma.com/design/BpKfqgp6cVhvP7zfv2w1CT/Untitled?m=auto&t=qKEcTSlqikgPKREx-6" },
    { label: "Electric Bike E-commerce UI", url: "https://www.figma.com/file/7wYXS7T2eAVHbBypuBMonb?type=design" },
  ],

  experience: [
    {
      date: "Jan 2026 – Apr 2026",
      title: "AI and Machine Learning Intern",
      place: "Microsoft Elevate — GTU Internship Program with Fice Education Pvt. Ltd.",
      detail:
        "Completed a 12-week internship covering artificial intelligence, machine learning, Microsoft Copilot, and emerging technologies.",
    },
    {
      date: "Dec 2025 – Jan 2026",
      title: "Full Stack Development Trainee",
      place: "Flikt Technology Web Solution",
      detail:
        "Completed a one-month full stack training program, practicing front-end and back-end fundamentals and the complete web project flow.",
    },
    {
      date: "Jan 2025",
      title: "UI/UX Designer Intern",
      place: "EazyByts Web Solutions",
      detail:
        "Worked on UI/UX design tasks, creating clean screens for web projects and improving layouts based on requirements and feedback.",
    },
  ],

  education: [
    {
      title: "B.E. Computer Science & Engineering",
      place: "Ahmedabad Institute of Technology",
      meta: "May 2023 – Current",
    },
    {
      title: "Diploma in Computer Engineering",
      place: "Om Institute of Engineering and Technology, Junagadh",
      meta: "Nov 2020 – May 2023",
    },
    {
      title: "Certificate — AI, ML & Emerging Technologies",
      place: "Microsoft Elevate, GTU Internship Program",
      meta: "12 weeks · Jan – Apr 2026",
    },
  ],
};

/* ============ HELPERS ============ */
const escapeHTML = (value) =>
  String(value).replace(/[&<>"']/g, (char) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[char]));

const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

/* ============ RENDER ============ */
function renderHeroSocials() {
  const el = document.querySelector("#heroSocials");
  if (!el) return;
  const links = [
    { label: "Email", url: `mailto:${data.socials.email}` },
    { label: "LinkedIn", url: data.socials.linkedin },
    data.socials.github ? { label: "GitHub", url: data.socials.github } : null,
  ].filter(Boolean);
  el.innerHTML = links
    .map((l) => `<a href="${escapeHTML(l.url)}" target="_blank" rel="noreferrer">${escapeHTML(l.label)}</a>`)
    .join("");
}

function renderAboutStats() {
  const el = document.querySelector("#aboutStats");
  if (!el) return;
  el.innerHTML = data.aboutStats
    .map((s) => `<div class="stat"><strong>${escapeHTML(s.value)}</strong><span>${escapeHTML(s.label)}</span></div>`)
    .join("");
}

function renderSkills() {
  const el = document.querySelector("#skillsGrid");
  if (!el) return;
  el.innerHTML = data.skills
    .map(
      (group) => `
        <div class="skill-card reveal">
          <h3>${escapeHTML(group.title)}</h3>
          <div class="skill-tags">${group.tags.map((t) => `<span>${escapeHTML(t)}</span>`).join("")}</div>
        </div>`
    )
    .join("");
}

function renderProjects() {
  const el = document.querySelector("#projectList");
  if (!el) return;
  el.innerHTML = data.projects
    .map(
      (p, i) => `
        <article class="project-card reveal tilt-card" style="--delay:${i * 70}ms">
          <div class="project-media">
            <span class="project-glow" aria-hidden="true"></span>
            <span class="project-index">0${i + 1}</span>
            <img src="${escapeHTML(p.image)}" alt="${escapeHTML(p.alt)}" loading="lazy" />
          </div>
          <div class="project-body">
            <p class="project-tag">${escapeHTML(p.tag)}</p>
            <h3>${escapeHTML(p.title)}</h3>
            <p class="desc">${escapeHTML(p.description)}</p>
            <div class="project-meta">
              <span>Role: ${escapeHTML(p.role)}</span>
              ${p.tools.map((t) => `<span>${escapeHTML(t)}</span>`).join("")}
            </div>
            <ul class="project-features">
              ${p.features.map((f) => `<li>${escapeHTML(f)}</li>`).join("")}
            </ul>
            <div class="project-actions">
              ${p.linkUrl ? `<a class="project-link" href="${escapeHTML(p.linkUrl)}" target="_blank" rel="noreferrer">${escapeHTML(p.linkLabel)}</a>` : ""}
            </div>
          </div>
        </article>`
    )
    .join("");
}

function renderMoreLinks() {
  const el = document.querySelector("#moreLinks");
  if (!el) return;
  el.innerHTML = data.moreLinks
    .map((l) => `<a href="${escapeHTML(l.url)}" target="_blank" rel="noreferrer">${escapeHTML(l.label)}</a>`)
    .join("");
}

function renderTimeline() {
  const el = document.querySelector("#timeline");
  if (!el) return;
  el.innerHTML = data.experience
    .map(
      (e) => `
        <div class="timeline-item reveal">
          <p class="t-date">${escapeHTML(e.date)}</p>
          <h3>${escapeHTML(e.title)}</h3>
          <p class="t-place">${escapeHTML(e.place)}</p>
          <p>${escapeHTML(e.detail)}</p>
        </div>`
    )
    .join("");
}

function renderEducation() {
  const el = document.querySelector("#educationGrid");
  if (!el) return;
  el.innerHTML = data.education
    .map(
      (ed) => `
        <article>
          <h4>${escapeHTML(ed.title)}</h4>
          <p>${escapeHTML(ed.place)}</p>
          <p>${escapeHTML(ed.meta)}</p>
        </article>`
    )
    .join("");
}

function renderContactInfo() {
  const el = document.querySelector("#contactInfo");
  if (!el) return;
  const rows = [
    { label: "Email", value: data.socials.email, url: `mailto:${data.socials.email}` },
    { label: "Phone", value: data.socials.phone, url: `tel:${data.socials.phone.replace(/\s+/g, "")}` },
    { label: "LinkedIn", value: "shyamgohel14", url: data.socials.linkedin },
    { label: "Location", value: "Ahmedabad, Gujarat", url: "" },
  ];
  el.innerHTML = rows
    .map((r) =>
      r.url
        ? `<div><p class="c-label">${escapeHTML(r.label)}</p><a href="${escapeHTML(r.url)}" target="_blank" rel="noreferrer">${escapeHTML(r.value)}</a></div>`
        : `<div><p class="c-label">${escapeHTML(r.label)}</p><span>${escapeHTML(r.value)}</span></div>`
    )
    .join("");
}

function renderFooterLinks() {
  const el = document.querySelector("#footerLinks");
  if (!el) return;
  const links = [
    { label: "Email", url: `mailto:${data.socials.email}` },
    { label: "LinkedIn", url: data.socials.linkedin },
    data.socials.github ? { label: "GitHub", url: data.socials.github } : null,
    { label: "Resume", url: "Shyam_Resume.pdf" },
  ].filter(Boolean);
  el.innerHTML = links
    .map((l) => `<a href="${escapeHTML(l.url)}" target="_blank" rel="noreferrer">${escapeHTML(l.label)}</a>`)
    .join("");
}

/* ============ CONTACT FORM (mailto — no backend) ============ */
function setupContactForm() {
  const form = document.querySelector("#contactForm");
  const status = document.querySelector("#formStatus");
  if (!form) return;

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const fd = new FormData(form);
    const name = String(fd.get("name") || "").trim();
    const email = String(fd.get("email") || "").trim();
    const message = String(fd.get("message") || "").trim();

    if (!name || !email || !message) {
      if (status) status.textContent = "Please fill in all fields.";
      return;
    }

    const subject = `Portfolio inquiry from ${name}`;
    const body = `${message}\n\n— ${name} (${email})`;
    const mailto = `mailto:${data.socials.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    if (status) status.textContent = "Opening your email app to send this message…";
    window.location.href = mailto;
  });
}

/* ============ NAV / SCROLL / REVEAL ============ */
function setupNav() {
  const toggle = document.querySelector(".nav-toggle");
  const nav = document.querySelector("#siteNav");
  const header = document.querySelector("#siteHeader");

  toggle?.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("is-open");
    toggle.setAttribute("aria-expanded", String(isOpen));
  });

  nav?.addEventListener("click", (e) => {
    if (e.target instanceof HTMLAnchorElement) {
      nav.classList.remove("is-open");
      toggle?.setAttribute("aria-expanded", "false");
    }
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      nav?.classList.remove("is-open");
      toggle?.setAttribute("aria-expanded", "false");
    }
  });

  const updateScrollState = () => {
    const scrollable = document.documentElement.scrollHeight - window.innerHeight;
    const amount = scrollable > 0 ? (window.scrollY / scrollable) * 100 : 0;
    document.documentElement.style.setProperty("--scroll", `${amount}%`);
    header?.classList.toggle("is-scrolled", window.scrollY > 12);
  };
  updateScrollState();
  window.addEventListener("scroll", updateScrollState, { passive: true });

  const navLinks = [...document.querySelectorAll(".site-nav a")];
  const sections = navLinks.map((l) => document.querySelector(l.getAttribute("href"))).filter(Boolean);
  if ("IntersectionObserver" in window) {
    const activeObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          navLinks.forEach((l) => l.classList.toggle("is-active", l.getAttribute("href") === `#${entry.target.id}`));
        });
      },
      { threshold: 0.45 }
    );
    sections.forEach((s) => activeObserver.observe(s));
  }
}

function setupReveal() {
  const targets = document.querySelectorAll(".reveal");
  if (reduceMotion || !("IntersectionObserver" in window)) {
    targets.forEach((t) => t.classList.add("is-visible"));
    return;
  }
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      });
    },
    { threshold: 0.12, rootMargin: "0px 0px -6% 0px" }
  );
  targets.forEach((t) => observer.observe(t));
}

function setupTiltCards() {
  if (reduceMotion || !window.matchMedia("(pointer: fine)").matches) return;
  document.querySelectorAll(".tilt-card").forEach((card) => {
    card.addEventListener("pointermove", (event) => {
      const rect = card.getBoundingClientRect();
      const x = (event.clientX - rect.left) / rect.width - 0.5;
      const y = (event.clientY - rect.top) / rect.height - 0.5;
      card.style.setProperty("--tilt-x", `${(-y * 5).toFixed(2)}deg`);
      card.style.setProperty("--tilt-y", `${(x * 6).toFixed(2)}deg`);
      card.style.setProperty("--glow-x", `${((x + 0.5) * 100).toFixed(1)}%`);
      card.style.setProperty("--glow-y", `${((y + 0.5) * 100).toFixed(1)}%`);
    });

    card.addEventListener("pointerleave", () => {
      card.style.setProperty("--tilt-x", "0deg");
      card.style.setProperty("--tilt-y", "0deg");
      card.style.setProperty("--glow-x", "50%");
      card.style.setProperty("--glow-y", "50%");
    });
  });
}

function setupHeroMotion() {
  const hero = document.querySelector(".hero");
  if (!hero || reduceMotion || !window.matchMedia("(pointer: fine)").matches) return;
  hero.addEventListener("pointermove", (event) => {
    const rect = hero.getBoundingClientRect();
    const x = ((event.clientX - rect.left) / rect.width - 0.5) * 2;
    const y = ((event.clientY - rect.top) / rect.height - 0.5) * 2;
    hero.style.setProperty("--hero-x", x.toFixed(3));
    hero.style.setProperty("--hero-y", y.toFixed(3));
  });
}

/* ============ INIT ============ */
renderHeroSocials();
renderAboutStats();
renderSkills();
renderProjects();
renderMoreLinks();
renderTimeline();
renderEducation();
renderContactInfo();
renderFooterLinks();
setupContactForm();
setupNav();
setupReveal();
setupTiltCards();
setupHeroMotion();
