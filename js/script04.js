// part 4 - Events

// const button = document.getElementById('button')

// button.addEventListener('click', buttonClick)
// 1
// function buttonClick () {
//   const headerTitle = document.getElementById('header-title')
//   headerTitle.textContent = 'Changed!'
//   headerTitle.style.color = 'coral'
//   document.querySelector('#main').style.backgroundColor = '#f4f4f4'
// }
// 2
// function buttonClick (e) {
// console.log(e);
//   console.log(e.target)
//   console.log(e.target.id)
//   console.log(e.target.className) // повертає простий текст: btn btn-dark btn-block
//   console.log(e.target.classList) // повертає Масив: ['btn', 'btn-dark', 'btn-block', value: 'btn btn-dark btn-block']
//   const output = document.getElementById('output')
//   output.innerHTML = `<h3> ${e.target.id} </h3>`
//   console.log(e.type);
//   console.log(e.clientX);
//   console.log(e.clientY);
//   console.log(e.offsetX);
//   console.log(e.offsetY);
//   console.log(e.altKey);
//   console.log(e.ctrlKey);
//   console.log(e.shiftKey);
// }

const button = document.getElementById('button')
const box = document.getElementById('box')

// button.addEventListener('click', runEvent)
// button.addEventListener('dblclick', runEvent)
// button.addEventListener('mousedown', runEvent)
// button.addEventListener('mouseup', runEvent)

// box.addEventListener('mouseenter', runEvent)
// box.addEventListener('mouseleave', runEvent)

// box.addEventListener('mouseover', runEvent)
// box.addEventListener('mouseout', runEvent)

// box.addEventListener('mousemove', runEvent)

const form = document.querySelector('form')

const itemInput = document.querySelector('input[type="text"]')

const select = document.querySelector('select')

itemInput.addEventListener('keydown', runEvent)
itemInput.addEventListener('keyup', runEvent)
// itemInput.addEventListener('keypress', runEvent)

// itemInput.addEventListener('focus', runEvent)
// itemInput.addEventListener('blur', runEvent)

// itemInput.addEventListener('cut', runEvent)
// itemInput.addEventListener('paste', runEvent)

// itemInput.addEventListener('input', runEvent)

// select.addEventListener('change', runEvent) // change - коли в select ми змінюємо опцію
// select.addEventListener('input', runEvent) // change - коли в select ми змінюємо опцію

form.addEventListener('submit', runEvent)

function runEvent (e) {
//   e.preventDefault()

  console.log('EVENT TYPE: ' + e.type)
  console.log(e.target.value)

  document.getElementById('output').innerHTML = `<h3> ${e.target.value} </h3>`

  //   output.innerHTML = `<h3>MouseX: ${e.offsetX} </h3><h3>MouseY: ${e.offsetY} </h3>`
  //   box.style.backgroundColor = `rgb(${e.offsetX},${e.offsetY},40)`
  //   document.body.style.backgroundColor = `rgb(${e.offsetX},${e.offsetY},40)`
}
