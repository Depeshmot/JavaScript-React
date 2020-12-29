Допустим у нас есть готовая верстка, в данном примере я обращаюсь ко всем кнопкам


const btns = document.querySelectorAll('.button');

console.log(btns[0].classList.length); // метод позволяющий узнать какое количесвто элементов есть у данной кнопки .classList - классов .length - их колличество


// НО намного чаще применяются  методы

console.log(btns[0].classList.item(0)); // Позволяет получить  класс который распологается под определенным индексом

// Чаще всего используются методы: add - добавить, 

console.log(btns[0].classList.add('red'));// Добавление класса red

console.log(btns[0].classList.remove('blue')); // удаление класса blue'

console.log(btns[0].classList.toggle('blue')); // Если этот класс сейчас есть на эллементе, то класс будет убран, а если его нет, то наоборот добавлен!


// Данный метод дает нам множество возможностей на динамическое изменение страницы, 
if (btns[1].classList.contains('red')) {  // Даныый метод проверяет булиновое значение, если класс есть значит ДА - true, если нет - false
    console.log('');
}

btns[0].addEventListener('click', () => { // Проверяем у второй кнопки начиличе класса red и что такого класса нет
    if (!btns[1].classList.contains('red')) {
        btns[1].classList.add('red');
    }  else {
        btns[1].classList.remove('red');
    }
});

// Делигирование событий - очень ажная тема

const wrapper = document.querySelector('.btn-block');

wrapper.addEventListener('click', (event) => { // АРГУМЕНТ event содержит всю информацию о том элементе на котором происходит событие
    if (event.target && event.target.tagName == 'BUTTON') {
        console.log('Если кликнуть на любую кнопку в консоль улетит вот эта фраза');
    }
});

const btn = document.createElement('button'); // Создаем дополнительную кнопку 
btn.classList.add('red');
wrapper.append(btn);