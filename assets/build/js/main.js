// Импортируем другие js-файлы
/* Индекс слайда по умолчанию */
var slideIndex = 1;
var slideInterval = setInterval(plusSlide,4000);

/* Функция увеличивает индекс на 1, показывает следующй слайд*/
function plusSlide() {
    showSlides(slideIndex += 1);
}

/* Функция уменьшяет индекс на 1, показывает предыдущий слайд*/
function minusSlide() {
    showSlides(slideIndex -= 1);  
}

/* Устанавливает текущий слайд */
function currentSlide(n) {
    showSlides(slideIndex = n);
}

/* Основная функция слайдера */
function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("slider-item");
  var dots = document.getElementsByClassName("slider_dots_item");
  var sliderInfo =  document.getElementById("slider_info");

  if (n > slides.length) { //если номер текущего слайда больше общего количества слайдов то ставим активный первый слайд
    slideIndex = 1
  }
  if (n < 1) {  //если номер текущего слайда меньше 1 то ставим активный последний слайд
      slideIndex = slides.length
  }
  // прячем все слайды
  for (i = 0; i < slides.length; i++) {
      slides[i].className = slides[i].className.replace(" active", "");
  }
  //Прячем все "точки" слайдов
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  //Обновляем номер текущего слайда в информационном поле
  sliderInfo.textContent= slideIndex + ' / ' + slides.length;
  // показываем текущий слайд и "точку"
  slides[slideIndex - 1].className += " active";
  dots[slideIndex - 1].className += " active";
}

