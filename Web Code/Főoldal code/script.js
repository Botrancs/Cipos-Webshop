let slideIndex = 1;
showSlides(slideIndex);

function currentSlide(n) {
  slideIndex = n;
    showSlides(n);
}

function showSlides(n) {
  let i;    
  let slides = document.getElementsByClassName('slider_kepek');
  let dots = document.getElementsByClassName('rect');

  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }

  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}
