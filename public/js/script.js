
let slideIndex = 1;
let slides = document.querySelectorAll(".imgSection1");
let squares = document.querySelectorAll(".square");
let interval = setInterval(Interval,10000);
let isOpen = false;

showSlides(slideIndex)

function plusSlides(n){
    showSlides(slideIndex += n)
}

function currentSlide(n){
    showSlides(slideIndex = n)
}

function Interval(){
    slideIndex ++;
    if(slideIndex > 4){
        slideIndex = 1;
    }
    showSlides(slideIndex)
}

function showSlides(n){
    let i;
    if(n > slides.length) {
        slideIndex = 1;
    }
    else if(n < 1) {
        slideIndex = slides.length;
    }
    for(i = 0; i < slides.length; i++){
        slides[i].style.display = "none";
    }
    for(i = 0; i < squares.length; i++){
        squares[i].className = squares[i].className.replace(" active","");
    }
    slides[slideIndex-1].style.display = "block";
    squares[slideIndex-1].className += " active";
}

function ToggleForm() {
    if(isOpen) {
        $('#contactForm').animate({
            bottom: '-220px'
        }, 330, 'swing');
        isOpen = false;
    }
    else {
        $('#contactForm').animate({
            bottom: '0px' 
        }, 300, 'swing');
        isOpen = true;
    }
}





