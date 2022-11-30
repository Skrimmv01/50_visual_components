const left = document.querySelector('.left');
const right = document.querySelector('.right');
const container = document.querySelector('.container');

// Наведение курсора на левую часть экрана
left.addEventListener('mouseenter', () => container.classList.add('hover-left'));
left.addEventListener('mouseleave', () => container.classList.remove('hover-left'));

// Наведение курсора на правую часть экрана
right.addEventListener('mouseenter', () => container.classList.add('hover-right'));
right.addEventListener('mouseleave', () => container.classList.remove('hover-right'));
