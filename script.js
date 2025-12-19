/* ===== Scroll Reveal Animation ===== */
window.onload = () => {
  window.scrollTo(0, 0);
};

if (window.location.hash) {
  history.replaceState(null, null, window.location.pathname);
}

window.addEventListener("scroll", reveal);

function reveal() {
  const reveals = document.querySelectorAll(".reveal");

  reveals.forEach(section => {
    const windowHeight = window.innerHeight;
    const revealTop = section.getBoundingClientRect().top;
    const revealPoint = 100;

    if (revealTop < windowHeight - revealPoint) {
      section.classList.add("active");
    }
  });
}

/* ===== Typing Effect ===== */
const textArray = [
  "AIML-focused Python Developer",
  "Generative AI Enthusiast"
];

let typingIndex = 0;
let charIndex = 0;
const typingElement = document.getElementById("typing");

function typeText() {
  if (charIndex < textArray[typingIndex].length) {
    typingElement.textContent += textArray[typingIndex].charAt(charIndex);
    charIndex++;
    setTimeout(typeText, 100);
  } else {
    setTimeout(eraseText, 2000);
  }
}

function eraseText() {
  if (charIndex > 0) {
    typingElement.textContent =
      textArray[typingIndex].substring(0, charIndex - 1);
    charIndex--;
    setTimeout(eraseText, 50);
  } else {
    typingIndex = (typingIndex + 1) % textArray.length;
    setTimeout(typeText, 500);
  }
}

document.addEventListener("DOMContentLoaded", typeText);

/* ===== Accordion ===== */
document.querySelectorAll(".accordion-header").forEach(header => {
  header.addEventListener("click", () => {
    const item = header.parentElement;

    document.querySelectorAll(".accordion-item").forEach(i => {
      if (i !== item) i.classList.remove("active");
    });

    item.classList.toggle("active");
  });
});
