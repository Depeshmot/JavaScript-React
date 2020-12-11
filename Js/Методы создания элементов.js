const div = document.createElement('div');
const text = document.createTextNode('Тут был я');

// Современные методы 

div.classList.add('black');

document.body.append(div);// Метод append который добавляет нужный мне div в тег body

document.querySelector('.wrapper').append(div); // Метод  querySelector добавляет div в конкретный блок wrapper

wrapper.append(div); // Метод добавляет набор объектов Node или DOMString в конец

wrapper.prepend(div); // Метод добавляет набор объектов Node или DOMString в начало

hearts[0].before(div); // Метод добавляет набор объектов переде

hearts[0].after(div); // Метод добавляет набор объектов после

buttons[0].remove(); // Метод удаляет конкртный элемент, в данном примере первую кнопку

buttons[0].replaceWith(circles[0]); // Метод который заменяет один элемент на конкретный другой

// Старые методы, просто чтоб знал что такие еще встречаются

wrapper.appendChild(div); // Метод добавляет набор объектов Node или DOMString в конец

wrapper.insertBefore(div, hearts[0]); // Метод добавляет набор объектов Node или DOMString в начало, с возмождностью выбрать перед каким элементов вставить мой новый элемент

wrapper.removeChild(hearts[1]); // Метод удаления конкретного элемента

wrapper.replaceChild(circles[0], hearts[0]); // Метод который заменяет один элемент на конкретный другой

// Как добавить что то в HTML при помощи JavaScript

div.innerHTML = 'Fuck you'; // Метод динамического добавления/изменения/редактирования html страницы при помощи скрипта (Метод добавления HTML структуры)

div.innerHTML = '<h1>Fuck you</h1>'; // тоже самое 

div.textContent = 'Fuck off'; // Метод добавления СТРОГО текста

// Методы для HTML

div.insertAdjacentHTML("beforebegin", '<h2>Hello</h2>'); // Метод позволяющий вставить данные перед элементом в начало

div.insertAdjacentHTML("beforeend", '<h2>Hello</h2>'); // Метод позволяющий вставить данные перед элементом в конец

div.insertAdjacentHTML("afterend", '<h2>Hello</h2>'); // Метод позволяющий вставить данные после элементом в конец

div.insertAdjacentHTML("afterbegin", '<h2>Hello</h2>'); // Метод позволяющий вставить данные после элементом в начало