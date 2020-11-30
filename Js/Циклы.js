'use strict';

//Циклы это одна из самых важных тем в программирование, благодоря циклам можно будет с помошью 3 строчек покрасить тысячи кнопок в нужный цвет и тд...

// Первый способ
let num = 50;

while (num < 55) {
    console.log(num);
    num++;
}



//Второй способ
let num = 50;

do {
    console.log(num);
    num++;
    
}
while (num < 55);



//Третий способ
for (let i = 1; i < 8; i++) {
    console.log(i);
}

//Оператоор continue
for (let i = 1; i < 10; i++) {
    if (i === 6) {
        //break;
        continue;
    }
    
    console.log(i);
}

    