// Методы которые позволяют путишествовать по DOM дереву:

console.log(document.head);

console.log(document.documentElement); // Свойство

console.log(document.body.childNodes); // Метод (узлы которые являются детьми к body)

console.log(document.body.firstChild); // Свойство Node.firstChild только для чтения, возвращающее первый потомок узла в древе или null, если узел является бездетным. Если узел это документ, он возвращает первый узел в списке своих прямых детей.

console.log(document.body.lastChild); // Метод возвращает последнего потомка в узле.

console.log(document.querySelector('#current').parentNode.parentNode); // Метод Возвращает родителя определенного элемента DOM дерева.

console.log(document.querySelector('[data-current="3"]').previosSibling); // Свойство Node.previousSibling используется только для чтения, оно возвращает узел предшедствующий указанному в родительском элементе childNodes, или null,  если указанный узел первый в своём родителе.

console.log(document.querySelector('[data-current="3"]').nextElementSibling);

for (let node of  document.body.childNodes) {
    if (node.nodeName == '#text') {
        continue; // Этот оператора позволит остановить повторение цикла и начать его заново уже с другим н
    }


    console.log(node);
}