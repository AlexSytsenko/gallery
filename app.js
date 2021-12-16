const slides = document.querySelectorAll(".slide");

console.log("works");

// for (const slide of slides) {
//   slide.addEventListener("click", () => {
//     slide.classList.add("active");
//   });
// }

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