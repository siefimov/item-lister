const itemList = document.querySelector('#items')

// parentNode
// console.log(`це є ${itemList}`)
// console.log(itemList.parentNode)
// itemList.parentNode.style.backgroundColor = '#f4f4f4'
// console.log(itemList.parentNode.parentNode)

// parentElement
console.log(itemList.parentElement)
itemList.parentElement.style.backgroundColor = '#f4f4f4'
console.log(itemList.parentElement.parentElement)

// childNodes - КРАЩЕ НЕ ВИКОРИСТОВУВАТИ
// console.log(itemList.childNodes);

// children
console.log(itemList.children);
console.log(itemList.children[0]);
itemList.children[1].style.backgroundColor = 'lightgreen'

// firstChild - НУ ДУЖЕ КОРИСНА
console.log(itemList.firstChild);

// firstElementChild
console.log(itemList.firstElementChild);
