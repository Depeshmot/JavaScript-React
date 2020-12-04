let str = 'some';
let strObj = new String(str);

console.log(typeof(str));
console.log(typeof(strObj));

console.dir([1,2,3]);


// Устаревшый метод
const soldier = {
    health: 400,
    armr: 100,
    function() { 
        console.log('Fuck you');
    }
};

const jonh = {
    health: 100
};

const jonh = Object.create(soldier);// Команда object.create
Object.setPrototypeOf(jonh, soldier);// Команда Object.setPrototypeOf

console.log(jonh.armor);

