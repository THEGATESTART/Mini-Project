const left = document.querySelector('.splitLeft');
const right = document.querySelector('.splitRight');
const contain = document.querySelector('.container');


left.addEventListener('mouseover', () => contain.classList.add('hover-left')); 
left.addEventListener('mouseout', () => contain.classList.remove('hover-left'));

right.addEventListener('mouseover', () => contain.classList.add('hover-right')); 
right.addEventListener('mouseout', () => contain.classList.remove('hover-right')); 