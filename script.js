document.addEventListener("DOMContentLoaded", () => {
  const elements = document.querySelectorAll(".fade-in");

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  });

  elements.forEach((el) => observer.observe(el));
});

document.addEventListener("DOMContentLoaded", () => {
  const title = document.querySelector("h1");
  const texts = [
    "Yoga with Margarita",
    "Find your inner peace",
    "Balance your body and mind",
  ];
  let index = 0;

  setInterval(() => {
    index = (index + 1) % texts.length;
    title.textContent = texts[index];
  }, 3000);
});
