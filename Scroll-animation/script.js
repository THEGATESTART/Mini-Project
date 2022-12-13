const boxes = document.querySelectorAll('.boxs');

window.addEventListener('scroll', checkBoxs);

checkBoxs();

function checkBoxs() {
    const triggerBottom = window.innerHeight / 5 * 4;

    boxes.forEach(box => {
        const boxTop = box.getBoundingClientRect().top;
        console.log(boxTop)
        console.log('.............')
        if (boxTop < triggerBottom) {
            box.classList.add('show');
        } else {
            box.classList.remove('show');
        }
    })
}
