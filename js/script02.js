// console.log(document.getElementById('header-title'))
const headerTitle = document.getElementById('header-title')
const header = document.getElementById('main-header')
console.log(headerTitle)
console.log(headerTitle.innerHTML) //Item Lister <span style="display: none;">123</span>
console.log(headerTitle.innerText) // Item Lister
console.log(headerTitle.textContent) // Item Lister 123
// headerTitle.textContent = 'Hello';
// headerTitle.textContent = 'Goodbay';
headerTitle.innerHTML = `<h3>Hello</he>`
headerTitle.style.borderBottom = 'solid 3px black'
header.style.borderBottom = 'solid 3px black'

// GET ELEMENTS BY CLASS NAME //
const items = document.getElementsByClassName('list-group-item')
console.log(items)
console.log(items[1])
items[1].textContent = 'Hello 2'
items[1].style.fontWeight = 'bold'
items[1].style.backgroundColor = 'yellow'
items[2].innerHTML = 'Hello 3'

// items.style.backgroundColor = '#f4f4f4' // це не працюэ

for (var i = 0; i < items.length; i++) {
  items[i].style.backgroundColor = '#ccc'
}

// GET ELEMENTS BY TAG NAME //
const li = document.getElementsByTagName('li')
console.log(li)
console.log(li[2])
console.log(li[2].textContent)
console.log(li[2].innerText)
console.log(li[2].innerHTML)
li[2].style.color = 'blue'
li[2].style.fontWeight = 'bold'

// QUERY SELECTOR
const headerS = document.querySelector('#main-header')
header.style.borderBottom = 'solid 4px red'

const input = document.querySelector('input')
input.value = 'hello world'

const submit = document.querySelector('input[type="submit"]')
submit.value = 'Send'

const item = document.querySelector('.list-group-item')
item.style.color = 'red'

const lastItem = document.querySelector('.list-group-item:last-child')
lastItem.style.color = 'brown'

const secondItem = document.querySelector('.list-group-item:nth-child(2)')
secondItem.style.color = 'coral'

// QUERY SELECTOR ALL

const titles = document.querySelectorAll('.title')
console.log(titles)
titles[0].textContent = 'Changed title'

const odd = document.querySelectorAll('li:nth-child(odd)')
const even = document.querySelectorAll('li:nth-child(even)')
for(var i = 0; i < odd.length; i++){
   odd[i].style.backgroundColor = '#f4f4f4'
   even[i].style.backgroundColor = '#e1edf7'

}

