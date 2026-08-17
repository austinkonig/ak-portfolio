const loadVeil = document.querySelector(".load-veil");
loadVeil?.addEventListener("animationend", () => loadVeil.remove());

function renderLetters(el, text) {
  [...text].forEach((char, i) => {
    const span = document.createElement("span");
    span.className = "letter";
    span.style.setProperty("--i", i);
    span.textContent = char === " " ? " " : char;
    el.appendChild(span);
  });
}

const title = document.getElementById("title");
renderLetters(title, "austin konig");

title.addEventListener("animationend", (e) => {
  if (e.animationName === "letter-hit-flash") {
    e.target.classList.remove("letter-hit");
  }
});

const ACTIVE_DELAY_MS = 30_000;
let siteActive = false;
setTimeout(() => {
  siteActive = true;
}, ACTIVE_DELAY_MS);

window.addEventListener("keydown", (e) => {
  if (!siteActive) return;
  if (e.metaKey || e.ctrlKey || e.altKey) return;
  const key = e.key.toLowerCase();
  if (!/^[a-z]$/.test(key)) return;

  title.querySelectorAll(".letter").forEach((span) => {
    if (span.textContent.toLowerCase() === key) {
      span.classList.remove("letter-hit");
      void span.offsetWidth;
      span.classList.add("letter-hit");
    }
  });
});

const highlights = [
  { role: "Data Science Intern", org: "Subtle Computing", dates: "2025", url: "https://subtle.co" },
  { role: "Software Engineer Intern", org: "The Openproof Project", dates: "2024", url: "https://openproof.gradegrinder.net/" },
  { role: "Teaching Assistant, CS106A/B", org: "Stanford University School of Engineering", dates: "2023 - 2024", url: "https://web.stanford.edu/class/cs106b/lair" },
  { role: "President, Talent Coordinator", org: "Stanford Concert Network", dates: "2024 - 2026", url: "https://instagram.com/stanford.concert.network" },
];

const list = document.getElementById("highlights");
for (const item of highlights) {
  const row = document.createElement("div");
  row.className = "exp-row";

  const left = document.createElement("div");
  left.className = "exp-left";
  const role = document.createElement("div");
  role.className = "exp-role";
  role.textContent = item.role;
  const org = document.createElement("a");
  org.className = "exp-org";
  org.textContent = item.org;
  org.href = item.url;
  org.target = "_blank";
  org.rel = "noopener noreferrer";
  left.appendChild(role);
  left.appendChild(org);

  const dates = document.createElement("div");
  dates.className = "exp-dates";
  dates.textContent = item.dates;

  row.appendChild(left);
  row.appendChild(dates);
  list.appendChild(row);
}

const cornerIcons = document.querySelectorAll(".corner-icon");
const MAX_GLOW_DIST = 260;

window.addEventListener("pointermove", (e) => {
  cornerIcons.forEach((icon) => {
    const rect = icon.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    const dist = Math.hypot(e.clientX - cx, e.clientY - cy);
    const glow = Math.max(0, 1 - dist / MAX_GLOW_DIST);

    icon.style.setProperty("--glow", glow.toFixed(3));
  });
});
