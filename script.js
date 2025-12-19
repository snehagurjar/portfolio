/* ===== Scroll Reveal Animation ===== */
// Fix auto-scroll on page load
window.onload = () => {
  window.scrollTo(0, 0);
};
// Remove hash from URL after load
if (window.location.hash) {
  history.replaceState(null, null, window.location.pathname);
}

window.addEventListener("scroll", reveal);
function downloadResume() {
  const link = document.createElement("a");
  link.href = "sneha_resume.pdf";
  link.download = "sneha_resume.pdf";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

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
// More About Me Accordion
document.querySelectorAll(".accordion-header").forEach(header => {
  header.addEventListener("click", () => {
    const item = header.parentElement;

    // Close other sections (optional behavior)
    document.querySelectorAll(".accordion-item").forEach(i => {
      if (i !== item) i.classList.remove("active");
    });

    item.classList.toggle("active");
  });
});
