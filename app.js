'use strict';
const upBtn = document.querySelector('.up-button');
const downBtn = document.querySelector('.down-button');
const sidebar = document.querySelector('.sidebar');
const container = document.querySelector('.container');
const mainSlide = document.querySelector('.main-slide');
const slidesCount = mainSlide.querySelectorAll('div').length;

sidebar.style.top = `-${(slidesCount - 1) * 100 }vh`;

downBtn.addEventListener('click', () => {
    changeSlide('down')
})
upBtn.addEventListener('click', () => {
    changeSlide('up')
})
 let activeSlides = 0;
function changeSlide(direction) {
   if(direction === 'up') {
       activeSlides++;
       if(activeSlides === slidesCount) {
           activeSlides = 0
       }
   } else if(direction === 'down') {
       activeSlides--;
       if(activeSlides < 0) {
           activeSlides = slidesCount - 1
       }
   }
   const height = container.clientHeight;
   mainSlide.style.transform = `translateY(-${activeSlides * height}px)`;
   sidebar.style.transform = `translateY(${activeSlides * height}px)`;
}

