// Старые методы обращения к эдементам на странице
const box = document.getElementById('box');

console.log(box);


const btns = document.getElementsByTagName('button')[1]; // Указывая через массив конкретную кнопку, мы обращаемся к обьекту 

console.log(btns);

const btns = document.getElementsByTagName('button');  

console.log(btns[1]);// Указывая кнопку здесь если мы хотим использовать элемент, только таким способом мы сможем изменять элемент



const circles = document.getElementsByClassName('circle');

console.log('circles');

// Новые методы обращения к элементам на странице
const hearts = document.querySelectorAll('.heart');

// cosnole.log(hearts);

hearts.forEach(item => {
    console.log(item);
});

const oneHeart = document.querySelector('.heart');// Метод который получает первый элемент в списки 
console.log(oneHeart);



// ВАЖНЫЕ ИТОГИ: 
1. У нас есть методы которые работают на ОБЪЕКТНОЙ МОДЕЛИ ДОКУМЕНТА (DOM), в коде он записывается как document. и работае только внутри браузера. У него есть 
два метода, чтобы получать один элемент: document.getElementById и document.querySelector. 

2. Помимо этого мы можем получать HTML коллекции - псевдо массивы, для этого у нас есть такие методы:  document.getElementsByTagName, document.getElementsByClassName,
document.querySelectorAll, используя эти методы нам необходимо использовать конкретные индексы элементом button[1]

3. Работая с элементами CSS необходимо указывать класс с точкой - .main-button

4. Работая Id не нужна # или точка - const box = document.getElementById('box')