

function slidesPlagin(activeSlide = 2) {
  const slides = document.querySelectorAll(".slide");

  slides[activeSlide].classList.add("active");

  slides.forEach((slide) => {
    slide.addEventListener("click", () => {
      clearActiveClases();
      slide.classList.add("active");
    });
  });

  function clearActiveClases() {
    slides.forEach((slide) => {
      slide.classList.remove("active");
    });
  }
}

slidesPlagin();