// Проверяем ширину и высоту
const box = document.querySelector('.box');

const width = box.clientWidth;
const heigth = box.clientHeight;

console.log(width, heigth);

// Функция раскрывающая окно 

btn.addEventListener('click', () => {
    box.style.heigth = box.scrollHeight + 'px';
    console.log(box.scrollTop);
});

console.log(box.getBoundingClientRect().top);

const style = window.getComputedStyle(box);

console.log(style.display);

// 