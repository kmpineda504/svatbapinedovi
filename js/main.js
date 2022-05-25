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
var countdown = () =>{
  var countDate = new Date("Sep 24, 2022 13:00:00").getTime()
  var now = new Date().getTime();
  var gap = countDate - now;

  var second = 1000;
  var minute = second * 60;
  var hour = minute * 60;
  var day = hour * 24;

  var textDay = Math.floor(gap / day);
  var textHour = Math.floor((gap % day) / hour);
  var textMinute = Math.floor((gap % hour) / minute);
  var textSecond = Math.floor((gap % minute) / second);

  document.querySelector(".day").innerText = textDay;
  document.querySelector(".hour").innerText = textHour;
  document.querySelector(".minute").innerText = textMinute;
  document.querySelector(".second").innerText = textSecond;
}
setInterval(countdown, 1000);
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
function initMap() {
  var innitLocation = { lat: 49.992992, lng: 15.864952 };
  var kostel = {lat: 49.951, lng: 15.7958};
  var dasickeSklepy = {lat: 50.0290, lng: 15.9154};
  var options={
    mapId: "2635966e05b3c0d6",
    //mapId: "8e0a97af9386fef",
    
    zoom: 11.5,
    center:innitLocation
  }
  var map = new google.maps.Map(document.getElementById("map"), options);

  var markers = [
    {coords:kostel,content:'<h1>Svatební Obřad</h1><p>Nanebevzetí Panny Marie v Chrudimi</br>Komenského</br>537 01 Chrudim</p><a href="https://goo.gl/maps/yyCrP1SoSZJtKTWW9" target="_blank">View in google maps</a>'},
    {coords:dasickeSklepy,content:'<h1>Svatební Hostina</h1><p>Dašické sklepy.</br>Komenského 27</br>533 03 Dašice</p><a href="https://goo.gl/maps/TEoHx7TgSFG7kYTD8" target="_blank">View in google maps</a>'}
  ];

  for(var i=0;i<markers.length;i++){
    addMarker(markers[i]);
  }

  function addMarker(props){
    var marker = new google.maps.Marker({
      position: props.coords,
      map: map,
    });

    if(props.iconImage){
      marker.setIcon(props.iconImage);
    }
    if(props.iconImage){
      marker.setIcon(props.iconImage);
    }

    if(props.content){
      var infoWindow = new google.maps.InfoWindow({ content: props.content });
      marker.addListener('click', function () { infoWindow.open(map, marker) });
    }
  }
}



window.initMap = initMap;
//-------------------------MAP_ENDS--------------------------------//
function googleTranslateElementInit(){
  new google.translate.TranslateElement({
      defaultLanguage: 'en',
      pageLanguage: 'en',
      includedLanguages: 'en,cs,es',
      layout: google.translate.TranslateElement.InlineLayout.SIMPLE,
      autoDisplay:false,
      multilanguagePage: true}, 'google_translate_element')
};