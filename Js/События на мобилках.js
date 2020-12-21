// touchstart - При возникновения касания к экрану/элементу
// touchmove - Палец двигается по экрану/элементу
// touchend - Как только палец оторвался от экрану/элементу
// touchenter - Ведение пальцем по экрану/элементу
// touchleave - Палец ушел за пределы экраны/элементы
// touchcancel - Точка соприкасновения больше не регистрируется на поверхности



// 1
window.addEventListener('DOMContentLoaded' , () => {
    const box = document.querySelector('.box');

    box.addEventListener('touchstart', (e) => {
        e.preventDefault();

        console.log('Start');
    });
});

// 2
window.addEventListener('DOMContentLoaded' , () => {
    const box = document.querySelector('.box');

    box.addEventListener('touchmove', (e) => {
        e.preventDefault();

        console.log('Move');
    });
});

// 3
window.addEventListener('DOMContentLoaded' , () => {
    const box = document.querySelector('.box');

    box.addEventListener('touchend', (e) => {
        e.preventDefault();

        console.log('End');
    });
});

// Существует три главных свойства при работе с сенсорными устройствами

// touches  - Количество пальцев которые взаимодействовали с элементмами/экраном
window.addEventListener('DOMContentLoaded' , () => {
    const box = document.querySelector('.box');

    box.addEventListener('touchend', (e) => {
        e.preventDefault();

        console.log('End');
        console.log(e.touches); // Создает обьект TouchList
    });
});

// targetTouches  - Количество пальцев которые взаимодействовали именно с конкретным элементмамом 
window.addEventListener('DOMContentLoaded' , () => {
    const box = document.querySelector('.box');

    box.addEventListener('touchend', (e) => {
        e.preventDefault();

        console.log('End');
        console.log(e.targetTouches); // Создает обьект TouchList
    });
});

// changedTouches  - Список пальцев которые учавствуют в данном событии 
window.addEventListener('DOMContentLoaded' , () => {
    const box = document.querySelector('.box');

    box.addEventListener('touchend', (e) => {
        e.preventDefault();

        console.log('End');
        console.log(e.changedTouches); // Создает обьект TouchList
    });
});

// Создаем свое событие 
window.addEventListener('DOMContentLoaded' , () => {
    const box = document.querySelector('.box');

    box.addEventListener('touchend', (e) => {
        e.preventDefault();

    console.log(e.targetTouches[0].pageX);// Отслеживаем координаты пальца, после того как мы получили координаты, мы можем их использовать для 
                                          // определенных событий, например, после свайпа вверх, загружается ссылка

        console.log('End');
        console.log(e.changedTouches); // Создает обьект TouchList
    });
});