const clickImage = document.querySelector('.container');

clickImage.addEventListener('click', (e) => {
    
    if (e.target.classList.contains('cardImage')) {
        clickImage.querySelector('.active').classList.remove('active');
        e.target.classList.add('active');
    }
    
    console.log(clickTarget);
})
