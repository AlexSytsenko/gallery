const slides = document.querySelectorAll(".slide");

slides.forEach((slide) => {
  slide.addEventListener("click", () => {
    clearActiveClases();
    slide.classList.add("active");
  });
});


function clearActiveClases() {
  slides.forEach((slide) => {
    slide.classList.remove("active");
  })

}