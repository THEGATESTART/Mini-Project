//Click Icon to rotate
const hamberger = document.getElementById('hamberger');
const close = document.getElementById('close');
const circle = document.querySelector('.circle');
const container = document.querySelector('.container');
const nav = document.querySelector('.nav');
console.log(nav)

hamberger.addEventListener('click', () => {
    circle.classList.add('rotate');
    container.classList.add('rotate');
    nav.classList.add('slide');
});

close.addEventListener('click', () => {
    circle.classList.remove('rotate');
    container.classList.remove('rotate');
    nav.classList.remove('slide');
})
