const portfolioData = {
  projects: [
    {
      theme: "vedai",
      featured: true,
      image: "./assets/project-vedai.png",
      alt: "VedAI login and signup interface image",
      tag: "Figma | Login Flow",
      title: "Login & Signup Page - VedAI Startup",
      description:
        "Clean signup and login screens for a tech startup with focused account entry and calm visual hierarchy.",
      points: ["Simple form layout", "Startup-ready visual style", "Clear action path"],
      actionLabel: "View Figma",
      actionUrl:
        "https://www.figma.com/design/xvHbxAP08ZbzRtIqwj936Q/Login---SignUp-Web---Mobile-App-Design--Community-?m=auto&t=qKEcTSlqikgPKREx-6",
    },
    {
      theme: "streamo",
      image: "./assets/project-streamo.png",
      alt: "Streamo movie streaming website image",
      tag: "Figma | Entertainment",
      title: "Streamo - Movie Streaming Website",
      description:
        "Sleek movie discovery landing page focused on browsing, previewing, and finding content quickly.",
      actionLabel: "View Figma",
      actionUrl: "https://www.figma.com/design/z7SvQwwzVuehzIlB3NMpuh/Untitled?m=auto&t=qKEcTSlqikgPKREx-6",
    },
    {
      theme: "donoute",
      image: "./assets/project-donoute.png",
      alt: "Donoute sweets and donut website image",
      tag: "Figma | Food Brand",
      title: "Donoute - Donut Shop Website",
      description:
        "Colorful homepage concept for a sweets and donut shop with friendly product-focused sections.",
      actionLabel: "View Figma",
      actionUrl: "https://www.figma.com/design/aCbPpCrjHgn58MWsPrultc/Untitled?m=auto&t=qKEcTSlqikgPKREx-6",
    },
    {
      theme: "pizza",
      image: "./assets/project-pizza.png",
      alt: "Pizza order website image",
      tag: "Figma | Ordering Flow",
      title: "Pizza Order Website",
      description:
        "Menu browsing, cart review, and checkout interface designed for quick ordering and easy scanning.",
      actionLabel: "View Figma",
      actionUrl: "https://www.figma.com/design/XVJOjavLv7kW24LWFuddyV/Untitled?m=auto&t=qKEcTSlqikgPKREx-6",
    },
    {
      theme: "ai",
      image: "./assets/border-defence-logo.png",
      alt: "Border Defence project logo",
      logo: true,
      tag: "Python | AI/ML | OpenCV",
      title: "AI-Powered Border Defence and Surveillance",
      description:
        "Camera-feed monitoring concept using Python, OpenCV, and ML logic for detection and real-time alerts.",
      actionLabel: "View Project",
      actionUrl: "http://localhost:8501/",
    },
  ],
  figmaLinks: [
    {
      label: "Modern Landing Page UI",
      url: "https://www.figma.com/design/0nN9qbyrNWiQZas6i7ozSq/Untitled?m=auto&t=qKEcTSlqikgPKREx-6",
    },
    {
      label: "Multi-section Web Layout",
      url: "https://www.figma.com/design/7DzAmz3DdW4IYMZ6qgF9oe/Untitled?m=auto&t=qKEcTSlqikgPKREx-6",
    },
    {
      label: "Puma Landing Page",
      url: "https://www.figma.com/design/BpKfqgp6cVhvP7zfv2w1CT/Untitled?m=auto&t=qKEcTSlqikgPKREx-6",
    },
    {
      label: "Electric Bike E-commerce UI",
      url: "https://www.figma.com/file/7wYXS7T2eAVHbBypuBMonb?type=design",
    },
  ],
  process: [
    {
      step: "01",
      title: "Understand",
      description: "Read requirements, identify user needs, and map the screen purpose.",
    },
    {
      step: "02",
      title: "Wireframe",
      description: "Sketch the flow, layout priority, and useful interaction path.",
    },
    {
      step: "03",
      title: "Design",
      description: "Create clean screens with color, type, hierarchy, and visual rhythm.",
    },
    {
      step: "04",
      title: "Build & Learn",
      description: "Practice HTML, CSS, JavaScript basics, and improve through feedback.",
    },
  ],
  skills: [
    {
      title: "Design",
      items: [
        ["UI/UX design", "88%"],
        ["Wireframes", "82%"],
        ["Screen layouts", "84%"],
        ["User flows", "78%"],
        ["Visual design basics", "74%"],
      ],
    },
    {
      title: "Tools & Web",
      items: [
        ["Figma", "88%"],
        ["Canva", "80%"],
        ["Microsoft Office", "76%"],
        ["Microsoft Copilot", "72%"],
        ["HTML, CSS, JavaScript", "68%"],
      ],
    },
    {
      title: "Soft Skills",
      items: [
        ["Communication", "90%"],
        ["Teamwork", "88%"],
        ["Problem solving", "84%"],
        ["Quick learning", "92%"],
        ["Time management", "82%"],
      ],
    },
  ],
  experience: [
    {
      date: "21 Jan 2026 - 10 Apr 2026",
      title: "AI and Machine Learning Intern",
      place: "Microsoft Elevate - GTU Internship Program with Fice Education Pvt. Ltd.",
      detail:
        "Completed a 12-week program covering AI, machine learning, Microsoft Copilot, and emerging technologies.",
    },
    {
      date: "26 Dec 2025 - 29 Jan 2026",
      title: "Full Stack Development Trainee",
      place: "Flikt Technology Web Solution",
      detail: "Practiced front-end and back-end fundamentals while learning the complete flow of a web project.",
    },
    {
      date: "01 Jan 2025 - 31 Jan 2025",
      title: "UI/UX Designer Intern",
      place: "EazyByts Web Solutions",
      detail: "Created clean screens for web projects and learned to translate requirements into user-friendly interfaces.",
    },
  ],
  education: [
    {
      title: "Bachelor of Engineering",
      detail: "Computer Science & Engineering",
      meta: "Ahmedabad Institute of Technology | May 2023 - Current",
    },
    {
      title: "Diploma in Computer Engineering",
      detail: "Om Institute of Engineering and Technology, Junagadh",
      meta: "Nov 2020 - May 2023",
    },
    {
      title: "Certificates",
      detail: "Microsoft Elevate AI/ML, EazyByts UI/UX Internship, Flikt Full Stack Training",
      meta: "Jan 2025 - Apr 2026",
    },
    {
      title: "Languages",
      detail: "Gujarati native, Hindi fluent, English basic",
      meta: "Ahmedabad, Gujarat",
    },
  ],
};

const feedbackStorageKey = "shyam-portfolio-feedback";
let memoryFeedback = [];
const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

const escapeHTML = (value) =>
  String(value).replace(/[&<>"']/g, (char) => {
    const entities = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#39;",
    };
    return entities[char];
  });

const renderPortfolioContent = () => {
  const projectGrid = document.querySelector("#projectGrid");
  const figmaLinks = document.querySelector("#figmaLinks");
  const processTrack = document.querySelector("#processTrack");
  const skillColumns = document.querySelector("#skillColumns");
  const experienceTimeline = document.querySelector("#experienceTimeline");
  const educationGrid = document.querySelector("#educationGrid");

  if (projectGrid) {
    projectGrid.innerHTML = portfolioData.projects
      .map(
        (project) => `
          <article class="project-card ${project.featured ? "feature-card " : ""}tilt-card reveal" data-theme="${escapeHTML(project.theme)}">
            <figure class="${project.logo ? "project-logo-frame" : ""}">
              <img class="${project.logo ? "project-logo" : ""}" src="${escapeHTML(project.image)}" alt="${escapeHTML(project.alt)}" />
            </figure>
            <div class="project-content">
              <p class="tag">${escapeHTML(project.tag)}</p>
              <h3>${escapeHTML(project.title)}</h3>
              <p>${escapeHTML(project.description)}</p>
              ${
                project.points
                  ? `<ul class="project-points">${project.points
                      .map((point) => `<li>${escapeHTML(point)}</li>`)
                      .join("")}</ul>`
                  : ""
              }
              <div class="project-actions">
                <a class="project-link" href="${escapeHTML(project.actionUrl)}" target="_blank" rel="noreferrer">${escapeHTML(project.actionLabel)}</a>
              </div>
            </div>
          </article>
        `
      )
      .join("");
  }

  if (figmaLinks) {
    figmaLinks.innerHTML = portfolioData.figmaLinks
      .map(
        (link) =>
          `<a class="project-link alt" href="${escapeHTML(link.url)}" target="_blank" rel="noreferrer">${escapeHTML(link.label)}</a>`
      )
      .join("");
  }

  if (processTrack) {
    processTrack.innerHTML = portfolioData.process
      .map(
        (item) => `
          <article class="reveal" data-step="${escapeHTML(item.step)}">
            <span>${escapeHTML(item.step)}</span>
            <h3>${escapeHTML(item.title)}</h3>
            <p>${escapeHTML(item.description)}</p>
          </article>
        `
      )
      .join("");
  }

  if (skillColumns) {
    skillColumns.innerHTML = portfolioData.skills
      .map(
        (group) => `
          <div class="skill-panel reveal">
            <h3>${escapeHTML(group.title)}</h3>
            <ul>
              ${group.items
                .map(([label, level]) => `<li style="--level: ${escapeHTML(level)}"><span>${escapeHTML(label)}</span></li>`)
                .join("")}
            </ul>
          </div>
        `
      )
      .join("");
  }

  if (experienceTimeline) {
    experienceTimeline.innerHTML = portfolioData.experience
      .map(
        (item) => `
          <article class="reveal">
            <span>${escapeHTML(item.date)}</span>
            <h3>${escapeHTML(item.title)}</h3>
            <p>${escapeHTML(item.place)}</p>
            <p>${escapeHTML(item.detail)}</p>
          </article>
        `
      )
      .join("");
  }

  if (educationGrid) {
    educationGrid.innerHTML = portfolioData.education
      .map(
        (item) => `
          <article class="reveal">
            <h3>${escapeHTML(item.title)}</h3>
            <p>${escapeHTML(item.detail)}</p>
            <span>${escapeHTML(item.meta)}</span>
          </article>
        `
      )
      .join("");
  }
};

const getSavedFeedback = () => {
  try {
    return JSON.parse(localStorage.getItem(feedbackStorageKey)) || [];
  } catch {
    return memoryFeedback;
  }
};

const saveFeedback = (items) => {
  memoryFeedback = items;
  try {
    localStorage.setItem(feedbackStorageKey, JSON.stringify(items));
  } catch {
    // Some browsers restrict localStorage on local files; keep this session dynamic.
  }
};

const ratingLabel = (rating) => `${Number(rating)}/5`;

const renderFeedback = () => {
  const feedbackList = document.querySelector("#feedbackList");
  if (!feedbackList) return;

  const feedbackItems = getSavedFeedback();
  if (!feedbackItems.length) {
    feedbackList.innerHTML = '<p class="feedback-empty">No feedback yet. Be the first to add one.</p>';
    return;
  }

  feedbackList.innerHTML = feedbackItems
    .map(
      (item) => `
        <article class="feedback-item">
          <div class="feedback-meta">
            <strong>${escapeHTML(item.name)}</strong>
            <span class="feedback-rating" aria-label="${escapeHTML(item.rating)} out of 5">${ratingLabel(item.rating)}</span>
          </div>
          <p class="feedback-message">${escapeHTML(item.message)}</p>
          <span class="feedback-date">${escapeHTML(item.date)}</span>
        </article>
      `
    )
    .join("");
};

const setupFeedbackForm = () => {
  const form = document.querySelector("#feedbackForm");
  const status = document.querySelector("#feedbackStatus");
  const clearButton = document.querySelector("#clearFeedback");
  if (!form) return;

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const formData = new FormData(form);
    const newFeedback = {
      name: String(formData.get("name") || "").trim(),
      email: String(formData.get("email") || "").trim(),
      rating: String(formData.get("rating") || "5"),
      message: String(formData.get("message") || "").trim(),
      date: new Date().toLocaleDateString("en-IN", {
        day: "2-digit",
        month: "short",
        year: "numeric",
      }),
    };

    if (!newFeedback.name || !newFeedback.email || !newFeedback.message) {
      if (status) status.textContent = "Please complete all fields.";
      return;
    }

    const nextFeedback = [newFeedback, ...getSavedFeedback()].slice(0, 6);
    saveFeedback(nextFeedback);
    renderFeedback();
    form.reset();
    form.rating.value = "5";
    if (status) status.textContent = "Thank you. Your feedback was added.";
  });

  clearButton?.addEventListener("click", () => {
    saveFeedback([]);
    renderFeedback();
    if (status) status.textContent = "Feedback list cleared.";
  });
};

const setupTypewriter = () => {
  const targets = [
    {
      element: document.querySelector('[data-typewriter="role"]'),
      words: ["UI/UX Designer", "Front-End Learner", "AI & ML Enthusiast"],
      speed: 58,
      hold: 1250,
    },
    {
      element: document.querySelector('[data-typewriter="hero"]'),
      words: ["design sense", "clean flows", "classic polish", "AI curiosity"],
      speed: 72,
      hold: 1450,
    },
  ];

  targets.forEach(({ element, words, speed, hold }) => {
    if (!element) return;
    if (reduceMotion) {
      element.textContent = words[0];
      return;
    }

    let wordIndex = 0;
    let charIndex = words[0].length;
    let deleting = true;

    const tick = () => {
      const currentWord = words[wordIndex];
      element.textContent = currentWord.slice(0, charIndex);

      if (!deleting && charIndex === currentWord.length) {
        deleting = true;
        window.setTimeout(tick, hold);
        return;
      }

      if (deleting && charIndex === 0) {
        deleting = false;
        wordIndex = (wordIndex + 1) % words.length;
      }

      charIndex += deleting ? -1 : 1;
      window.setTimeout(tick, deleting ? speed * 0.62 : speed);
    };

    window.setTimeout(tick, hold);
  });
};

renderPortfolioContent();
renderFeedback();
setupFeedbackForm();
setupTypewriter();

const toggle = document.querySelector(".nav-toggle");
const nav = document.querySelector(".site-nav");
const header = document.querySelector(".site-header");

toggle?.addEventListener("click", () => {
  const isOpen = nav.classList.toggle("is-open");
  toggle.setAttribute("aria-expanded", String(isOpen));
});

nav?.addEventListener("click", (event) => {
  if (event.target instanceof HTMLAnchorElement) {
    nav.classList.remove("is-open");
    toggle?.setAttribute("aria-expanded", "false");
  }
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    nav?.classList.remove("is-open");
    toggle?.setAttribute("aria-expanded", "false");
  }
});

const updateScrollState = () => {
  const scrollable = document.documentElement.scrollHeight - window.innerHeight;
  const amount = scrollable > 0 ? (window.scrollY / scrollable) * 100 : 0;
  document.documentElement.style.setProperty("--scroll", `${amount}%`);
  header?.classList.toggle("is-scrolled", window.scrollY > 16);
};

updateScrollState();
window.addEventListener("scroll", updateScrollState, { passive: true });

const revealTargets = document.querySelectorAll(".reveal");

revealTargets.forEach((element, index) => {
  element.style.setProperty("--delay", `${Math.min(index % 7, 6) * 65}ms`);
});

const animateCounters = (container) => {
  container.querySelectorAll("[data-count]").forEach((counter) => {
    if (counter.dataset.done) return;
    counter.dataset.done = "true";
    const target = Number(counter.dataset.count);
    const suffix = target === 5 ? "+" : "";
    const start = performance.now();
    const duration = 900;

    const tick = (now) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      counter.textContent = `${Math.round(target * eased)}${suffix}`;
      if (progress < 1) requestAnimationFrame(tick);
    };

    requestAnimationFrame(tick);
  });
};

if ("IntersectionObserver" in window && !reduceMotion) {
  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-visible");
        if (entry.target.classList.contains("hero") || entry.target.querySelector("[data-count]")) {
          animateCounters(entry.target);
        }
        revealObserver.unobserve(entry.target);
      });
    },
    { threshold: 0.15, rootMargin: "0px 0px -8% 0px" }
  );

  revealTargets.forEach((element) => revealObserver.observe(element));
} else {
  revealTargets.forEach((element) => element.classList.add("is-visible"));
}

animateCounters(document);

const navLinks = [...document.querySelectorAll(".site-nav a")];
const sections = navLinks
  .map((link) => document.querySelector(link.getAttribute("href")))
  .filter(Boolean);

if ("IntersectionObserver" in window) {
  const activeObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        navLinks.forEach((link) => {
          link.classList.toggle("is-active", link.getAttribute("href") === `#${entry.target.id}`);
        });
      });
    },
    { threshold: 0.45 }
  );

  sections.forEach((section) => activeObserver.observe(section));
}

if (!reduceMotion && window.matchMedia("(pointer: fine)").matches) {
  window.addEventListener(
    "pointermove",
    (event) => {
      document.documentElement.style.setProperty("--cursor-x", `${event.clientX}px`);
      document.documentElement.style.setProperty("--cursor-y", `${event.clientY}px`);
    },
    { passive: true }
  );

  document.querySelectorAll(".tilt-card, .skill-panel, .education-grid article").forEach((card) => {
    card.addEventListener("pointermove", (event) => {
      const rect = card.getBoundingClientRect();
      const x = (event.clientX - rect.left) / rect.width - 0.5;
      const y = (event.clientY - rect.top) / rect.height - 0.5;
      card.style.transform = `perspective(900px) rotateX(${y * -5}deg) rotateY(${x * 6}deg) translateY(-8px)`;
    });

    card.addEventListener("pointerleave", () => {
      card.style.transform = "";
    });
  });

  document.querySelectorAll(".magnetic").forEach((button) => {
    button.addEventListener("pointermove", (event) => {
      const rect = button.getBoundingClientRect();
      const x = event.clientX - rect.left - rect.width / 2;
      const y = event.clientY - rect.top - rect.height / 2;
      button.style.transform = `translate(${x * 0.08}px, ${y * 0.12}px)`;
    });

    button.addEventListener("pointerleave", () => {
      button.style.transform = "";
    });
  });
}
