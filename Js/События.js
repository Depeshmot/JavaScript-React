
// Событие - сигнал от браузера о том, что что-то произошло

// Обработчик события - это функция, которая срабатывает как только проищошло собитие // События в Javascript выполняются в порядке очереди

// Существует 3 способа назначить обработчики событий:

// 1. Через HTML  (почти не используется)

<button onclick="alert('Click')" >Нажми меня</button>

// 2. Использовать свойства DOM дерева для событий (почти не используется)

const btn = document.querySelector('button');

btn.onclick = function() {
    alert('Click')
};

btn.addEventListener('Click', () => {
    alert('Click');
});

btn.addEventListener('Click', () => {
    alert('Second Click');
});


//  3. Специальные методы: elem.addEventListener(event, handler[, phase]) для добавления, removeEventListener для удаления.
const btn = document.querySelector('button');

btn.addEventListener('Click', (e) => {
    console.log(e.target);
    e.target.remove(); // 
});

//
let i = 0;
const deleteElement = (e) => {
    console.log(e.target);
    i++;
    if(i == 1) {
        btn.removeEventListener('click', deleteElement);
    }
};

btn.addEventListener('click', deleteElement);

//Принцип всплытия очень простой. Когда на элементе происходит событие, обработчики сначала срабатывают на нём, потом на его родителе, затем выше и так далее, вверх по цепочке предков.
const deleteElement = (e) => {
    console.log(e.target); // Свойство .target часто используется
    console.log(e.type);
};

btn.addEventListener('Click', deleteElement);
overlay.addEventListener('click', deleteElement);

// Пример с другим свойством currentTarget (мало используется)

const deleteElement = (e) => {
    console.log(e.currentTarget);
    console.log(e.type);
};

btn.addEventListener('Click', deleteElement);
overlay.addEventListener('click', deleteElement);

// Метод отменяет стандартное поведение браузера, после этого я назначаю свои события

const link = document.addEventListener('click', function(event) {
    event.preventDefault();// Метод прерывает переход по ссылке

    console.log(event.target);
});

//

btns.forEach(btn => {
    btn.addEventListener('click', deleteElement);
});