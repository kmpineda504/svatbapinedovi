//---------------------slideShow-JS----------------------//
const myslide = document.querySelectorAll('.myslide'),
	  dot = document.querySelectorAll('.dot');
let counter = 1;
slidefun(counter);

let timer = setInterval(autoSlide, 8000);
function autoSlide() {
	counter += 1;
	slidefun(counter);
}
function plusSlides(n) {
	counter += n;
	slidefun(counter);
	resetTimer();
}
function currentSlide(n) {
	counter = n;
	slidefun(counter);
	resetTimer();
}
function resetTimer() {
	clearInterval(timer);
	timer = setInterval(autoSlide, 10000);
}

function slidefun(n) {
	
	let i;
	for(i = 0;i<myslide.length;i++){
		myslide[i].style.display = "none";
	}
	for(i = 0;i<dot.length;i++) {
		dot[i].className = dot[i].className.replace(' active', '');
	}
	if(n > myslide.length){
	   counter = 1;
	   }
	if(n < 1){
	   counter = myslide.length;
	   }
	myslide[counter - 1].style.display = "block";
	dot[counter - 1].className += " active";
}
//---------------------slideShow-JS-ENDS--------------------//

//-----------------------Accordion js-----------------------//
var accordion = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < accordion.length; i++) {
  accordion[i].addEventListener("click", function() {
    this.classList.toggle("activeAccordion");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    } 
  });
}
//-----------------------Accordion JS ENDS-----------------------//

//-----------------------Countdown_Timer-----------------------//
// Set the date we're counting down to
var countDownDate = new Date("Sep 24, 2022 13:00:00").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();
    
  // Find the distance between now and the count down date
  var distance = countDownDate - now;
    
  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
  // Output the result in an element with id="demo"
  document.getElementById("demo").innerHTML = days + "d " + hours + "h "
  + minutes + "m " + seconds + "s ";
    
  // If the count down is over, write some text 
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "EXPIRED";
  }
}, 1000);
//-----------------------quoteSlideshow-----------------------//
var slideIndex = 1;
showSlides(slideIndex);

function plusQuote(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("myQuotes");
  var dots = document.getElementsByClassName("dotQuote");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" activeQuote", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " activeQuote";
}
//-----------------------quoteSlideshow_ENDS-----------------------//
//----------------------------MAP----------------------------------//
// Initialize and add the map
function initMap(){
  var chrudim={lat:49.9497,lng: 15.7951 }
  var options ={
    zoom:4,
    center:chrudim
  }
  //new map
  var map = new
  google.maps.Map(document.getElementById("map"),options);


  // The location of Uluru

  //
 // const uluru = { lat: -25.344, lng: 131.036 };
  // The map, centered at Uluru
//  const map = new google.maps.Map(
  //  document.getElementById("map") as HTMLElement,
  //  {
   //   zoom: 4,
   //   center: uluru,
   // }
 // );

  // The marker, positioned at Uluru
  //const marker = new google.maps.Marker({
  //  position: uluru,
   // map: map,
  //});
}