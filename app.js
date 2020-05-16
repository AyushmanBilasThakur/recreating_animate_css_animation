const animateText = document.getElementById("animate");
const animateClass = "shakeX";

let isAnimating = false;

document.getElementById("animationButton").addEventListener("click", () => {
  if (isAnimating) return;

  isAnimating = true;
  animateText.classList.add(animateClass);
});

animateText.addEventListener("animationend", () => {
  animateText.classList.remove(animateClass);
  isAnimating = false;
});
