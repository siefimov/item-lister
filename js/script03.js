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
console.log(itemList.children)
console.log(itemList.children[0])
itemList.children[1].style.backgroundColor = 'lightgreen'

// firstChild - НУ ДУЖЕ КОРИСНА
console.log(itemList.firstChild)

// firstElementChild
console.log(itemList.firstElementChild)

// nextSibling
console.log(itemList.nextSibling)

// nextElementSibling
console.log(itemList.nextElementSibling)

// createElement
const newDiv = document.createElement('div')
// add class
newDiv.className = 'hello'
// add id
newDiv.id = 'hello1'

newDiv.setAttribute('title', 'Hello Div')

// create text node
const newDivText = document.createTextNode('Hello world!')

// add text to div
newDiv.appendChild(newDivText)

const container = document.querySelector('div .card')
const h1 = document.querySelector('div h2')

container.insertBefore(newDiv, h1)

console.log(newDiv)
