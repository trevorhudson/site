const root = document.documentElement;

/* ---- Theme ---- */
const themeToggle = document.getElementById("theme-toggle");

function applyTheme(theme) {
  root.dataset.theme = theme;
}

function toggleTheme() {
  const next = root.dataset.theme === "dark" ? "light" : "dark";
  applyTheme(next);
}

themeToggle.addEventListener("click", toggleTheme);

/* ---- Email copy ---- */
const emailButton = document.getElementById("email-copy");
const emailMarker = emailButton.querySelector(".marker");

async function copyEmail() {
  const email = emailButton.dataset.email;

  try {
    await navigator.clipboard.writeText(email);
  } catch {
    // navigator.clipboard needs a secure context (https/localhost), so fall
    // back to a throwaway textarea + execCommand when opened over file://.
    const ta = document.createElement("textarea");
    ta.value = email;
    document.body.appendChild(ta);
    ta.select();
    document.execCommand("copy");
    ta.remove();
  }

  // Briefly confirm by swapping the [+] marker for a check.
  emailMarker.textContent = "[COPIED]";
  setTimeout(() => {
    emailMarker.textContent = "[+]";
  }, 1200);
}

emailButton.addEventListener("click", copyEmail);
