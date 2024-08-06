document.querySelector('#scroll-arrow').addEventListener('click', () => {
    window.scrollTo(0, window.innerHeight);
});

// Animation for boxes
window.addEventListener('scroll', () => {
    const boxes = document.querySelectorAll('.box');
    const triggerPoint = window.innerHeight / 1.3;

    boxes.forEach(box => {
        const boxTop = box.getBoundingClientRect().top;

        if (boxTop < triggerPoint) {
            box.classList.add('visible');
        } else {
            box.classList.remove('visible');
        }
    });
});

