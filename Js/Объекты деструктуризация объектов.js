

const options = {
    name: 'test',
    width: 1024,
    hight: 1024,
    colors: {
        border: 'black',
        bg: 'red'
    }
};

console.log(options.name); // Вытаскиваем конкретный объект

delete options.name; // Удаляем конкретный объект

// Метод "Как перебрать все свойства внутри объекта?"
for (let key in options) {
    if (typeof(options[key]) === 'object') {
        for (let i in options[key]) {
            console.log(`Свойство ${i} имеет значение ${options[key][i]}`);
        }
    } else {
        console.log(`Свойство ${key} имеет значение ${options[key]}`);
    }
    
}


// Метод "Как перебрать все свойства внутри объекта?" + "Какое количества свойст находится в объекте?"
let counter = 0;

for (let key in options) {
    if (typeof(options[key]) === 'object') {
        for (let i in options[key]) {
            console.log(`Свойство ${i} имеет значение ${options[key][i]}`);
            counter++;
        }
    } else {
        console.log(`Свойство ${key} имеет значение ${options[key]}`);
        counter++;
    }
    
}

console.log(counter);

// Метод "Какое количества свойст находится в объекте?"
let counter = 0;

for (let key in options) {
    counter++;
    
}

console.log(counter);

// Метод console.log(Object.keys(options)); создает массив ключей из свойств объекта

const options = {
    name: 'test',
    width: 1024,
    hight: 1024,
    colors: {
        border: 'black',
        bg: 'red'
    }
};

console.log(Object.keys(options));

console.log(Object.keys(options).length); // Благодоря добавлению .length мы получаем количество элементов которые появится в массиве


// Также мы можем сами создавать подобные методы вручную (методы это действия которые умеет совершать наш объект)!!!
const options = {
    name: 'test',
    width: 1024,
    hight: 1024,
    colors: {
        border: 'black',
        bg: 'red'
    },
    makeTest: function() { // Благодоря выдуманной функции makeTest мы создали метод который будет работать внутри объекта options
        console.log('Test');
    }
};

options.makeTest(); // Для того чтобы запустить метод 

console.log(Object.keys(options));

console.log(Object.keys(options).length); 

// Новый метод в ES6 ДИСТРУКТУРИЗАЦИЯ
const options = {
    name: 'test',
    width: 1024,
    hight: 1024,
    colors: {
        border: 'black',
        bg: 'red'
    },
    makeTest: function() { // Благодоря выдуманной функции makeTest мы создали метод который будет работать внутри объекта options
        console.log('Test');
    }
};

options.makeTest(); // Для того чтобы запустить метод 

const {border, bg} = options.colors;
console.log(border);
