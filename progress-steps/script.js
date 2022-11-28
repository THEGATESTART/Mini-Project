let progress = document.querySelector('#progress');
const container = document.querySelector('.container');
const containers = Array.from(container.children);
const buttonPrev = document.querySelector('#prev');
const buttonNext = document.querySelector('#next');
let progressWidth = progress.offsetWidth;

let numberWidth = containers[0].getBoundingClientRect().width;

// Set width size next to another image
const setSlidePosition = (slide, index) => {
    progress.style.width = numberWidth * index + 'px';
};
container.forEach(setSlidePosition);
console.log(sliders);

buttonNext.addEventListener('click', () => {
    // let indexs = [0, 1, 2, 3];
    // for (let i=0; i<indexs.length; i++) {
    //     console.log(i);
    //     progress.style.width = numberWidth * i + '%'
    // }

    
});

if (progressWidth == 0) {
    document.querySelector('#prev').disabled = "true";
    buttonNext.remove = 'disabled';
} 
if (progressWidth == 350) {
    buttonPrev.remove = 'disabled';
    document.querySelector('#next').disabled = "true";
}

console.log(numberWidth)