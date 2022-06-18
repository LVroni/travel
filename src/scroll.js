const previewLink = document.getElementById("scroll-preview");
const preview = document.getElementById("preview");

const stepsLink = document.getElementById("scroll-steps");
const steps = document.getElementById("steps");

previewLink.addEventListener("click", () => {
  previewLink.classList.add("active");
  stepsLink.classList.remove("active");
  preview.scrollIntoView({ behavior: "smooth" });
});

stepsLink.addEventListener("click", () => {
  stepsLink.classList.add("active");
  previewLink.classList.remove("active");
  steps.scrollIntoView({ behavior: "smooth" });
});
