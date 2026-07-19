// PassGuard - WDD 131 Final Project by Adam Herrmann.
// Password strength checker built from the ponder practice projects. Claude (Anthropic) helped with guidance; the logic and structure all is my own.

// passwords that show up on breached lists constantly
const commonPasswords = [
  "123456", "123456789", "password", "qwerty", "12345678", "111111",
  "1234567", "12345", "123123", "abc123", "password1", "qwerty123",
  "1q2w3e", "admin", "letmein", "welcome", "monkey", "dragon",
  "iloveyou", "sunshine", "princess", "football", "charlie", "aa123456",
  "password123", "654321", "superman", "qazwsx", "michael", "shadow",
];

// label to show a test that returns true or false
const criteria = [
  { label: "At least 15 characters (NIST recommendation)", test: (info) => info.length >= 15 },
  { label: "Meets a 12 character minimum", test: (info) => info.length >= 12 },
  { label: "Not a common or breached password", test: (info) => !info.common },
  { label: "Optional: adds numbers or symbols for extra strength", test: (info) => info.hasDigit || info.hasSymbol },
];

// checks x marks for the list
const checkMark = String.fromCharCode(10003);
const crossMark = String.fromCharCode(10007);

// read from or write to
const passwordInput = document.querySelector("#password");
const toggleButton = document.querySelector("#toggle");
const meterBar = document.querySelector("#meter-bar");
const strengthLabel = document.querySelector("#strength-label");
const summary = document.querySelector("#summary");
const checklist = document.querySelector("#checklist");

// password on the block list?
function isCommon(password) {
  return commonPasswords.includes(password.toLowerCase());
}

// character walk
function analyze(password) {
  const characters = Array.from(password);
  const info = {
    length: characters.length,
    hasLower: false,
    hasUpper: false,
    hasDigit: false,
    hasSymbol: false,
    common: false,
  };
  characters.forEach((ch) => {
    if (ch >= "a" && ch <= "z") info.hasLower = true;
    else if (ch >= "A" && ch <= "Z") info.hasUpper = true;
    else if (ch >= "0" && ch <= "9") info.hasDigit = true;
    else info.hasSymbol = true;
  });
  return info;
}

// NIST cares most about length
function getStrengthLabel(info) {
  if (info.length === 0) {
    return { text: "Type a password to begin", bar: "#cccccc", textColor: "#595959", pct: 0 };
  }
  if (info.common) {
    return { text: "Too common, avoid this password", bar: "#c1121f", textColor: "#c1121f", pct: 100 };
  }
  if (info.length >= 15) {
    return { text: "Strong", bar: "#2e933c", textColor: "#15682b", pct: 100 };
  } else if (info.length >= 12) {
    return { text: "Medium", bar: "#e09f3e", textColor: "#8a5a00", pct: 66 };
  } else {
    return { text: "Weak", bar: "#c1121f", textColor: "#c1121f", pct: 33 };
  }
}

// every keystroke updates the bar, the label, && the checklist
function updateUI() {
  const password = passwordInput.value;
  const info = analyze(password);
  info.common = isCommon(password);
  const result = getStrengthLabel(info);

  meterBar.style.width = result.pct + "%";
  meterBar.style.backgroundColor = result.bar;
  strengthLabel.textContent = result.text;
  strengthLabel.style.color = result.textColor;

  // how many rules pass
  const metCount = criteria.filter((rule) => rule.test(info)).length;
  summary.textContent =
    info.length === 0 ? "" : "Meets " + metCount + " of " + criteria.length + " recommendations";

  // build a row for each rule with a check or an x in front of it
  checklist.innerHTML = criteria
    .map((rule) => {
      const met = rule.test(info);
      const mark = met ? checkMark : crossMark;
      return `<li class="${met ? "met" : "unmet"}"><span aria-hidden="true">${mark}</span> ${rule.label}</li>`;
    })
    .join("");
}

// display typed password
function toggleVisibility() {
  const hidden = passwordInput.type === "password";
  passwordInput.type = hidden ? "text" : "password";
  toggleButton.textContent = hidden ? "Hide" : "Show";
  toggleButton.setAttribute("aria-pressed", String(hidden));
}


passwordInput.addEventListener("input", updateUI);
toggleButton.addEventListener("click", toggleVisibility);
updateUI();
