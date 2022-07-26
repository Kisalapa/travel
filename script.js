// let burgerButton = document.querySelector('.burger__button');
// let menu = document.querySelector('.header__burger');
// let body = document.querySelector('body');

// burgerButton.addEventListener('click', function(){
// 	menu.classList.toggle('active');

// })


function togglePopup() {
  const element = document.getElementById("popup")
  element.classList.toggle("active");

}

function togglePopup2() {
  document.getElementById("popup_2")
    .classList.toggle("active");
}
/*-------------------------Slider -----------------------*/
let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("slider__item");
  let dots = document.getElementsByClassName("slider__dot");
  if (n > slides.length) { slideIndex = 1 }
  if (n < 1) { slideIndex = slides.length }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}





