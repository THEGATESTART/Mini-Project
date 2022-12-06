let progress = document.querySelector('#progress');
const buttonPrev = document.querySelector('#prev');
const buttonNext = document.querySelector('#next');
const number = document.querySelectorAll('.number');

let currentActive = 1;

// Update currentActive plus number when click
buttonNext.addEventListener('click', () => {
    currentActive++;

    if (currentActive > number.length) {
        currentActive = number.length;
    }

    update();
})

// Update currentActive minus number when click
buttonPrev.addEventListener('click', () => {
    currentActive--;

    if (currentActive < 1) {
        currentActive = 1;
    }

    update();
})

function update() {
    // loop index from class number to check with current active number add active class
    number.forEach((number, index) => {
        if (index < currentActive) {
            number.classList.add('active');
        } else {
            number.classList.remove('active');
        }
    })

    // Set button disabled when currentActive in firstnumber and currentActive in last number
    const actives = document.querySelectorAll('.active');

    progress.style.width = (actives.length - 1) / (number.length - 1) * 100 + '%';
    
    if(currentActive === 1) {
        buttonPrev.disabled = 'true'
    } else if (currentActive === number.length) {
        buttonNext.disabled = 'true'
    } else {
        prev.disabled = false
        next.disabled = false
    }
}