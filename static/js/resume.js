//carousel
var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1};
  if (n < 1) {slideIndex = slides.length};
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}

//scroll back to the top
mybutton = document.getElementById("myBtn");

function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

//jQuery to change the color of the navbar on scroll. In this case I preferred jQuery as it works with all the browsers and is less verbose
var myNav = $("#myBtn");
var myResume = $("#myResume")

$(window).on('scroll', function() {
  if ($(window).scrollTop() >= 643 && $(window).scrollTop() < 1286 || $(window).scrollTop() > 1929)  {
    myNav.addClass("scroll");
    myResume.addClass("scroll-resume")
  } else {
    myNav.removeClass("scroll");
    myResume.removeClass("scroll-resume")
  }
});

// stack everflow code - I needed this to prevent the modal to appear on empty form
$('#form').on('submit',function(event){
  event.preventDefault()
  var name = $('#name').val();
  if(name == "" && email == "" && subject == "" && projectsummary == "") {
    return false;
  }else{
    $('#myModal').modal('show');
        }
    });
  
if ($(window).width() < 1200) {
    $('#nav-bar').removeClass('fixed-top');
} 

if ($(window).width() < 600) {
    $('#footer-button').removeClass('d-flex')
}