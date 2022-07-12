let burger = document.querySelector('.burger'),
    menu = document.querySelector('.header__menu');

burger.addEventListener('click', function(e) {
  menu.classList.toggle('active');
});