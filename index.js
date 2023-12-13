const menuBtn = document.querySelector('.menu-btn');
const sideNavbar=document.querySelector('.sideNavbar');

menuBtn.addEventListener("click",()=>{
sideNavbar.classList.toggle("active");
});


const slider = document.querySelector('.slider');
const slides = document.querySelectorAll('.slide');

let counter = 0;

function updateSlide() {
    const size = slides[0].clientWidth;
    slider.style.transform = `translateX(${-size * counter}px)`;
}

function slideNext() {
    if (counter >= slides.length - 1) {
        counter = 0; // Reset to the first slide
    } else {
        counter++;
    }
    updateSlide();
}

function slidePrev() {
    if (counter <= 0) {
        counter = slides.length - 1; // Go to the last slide
    } else {
        counter--;
    }
    updateSlide();
}

// Automatic slide change every 3 seconds
setInterval(slideNext, 5000);
