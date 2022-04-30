// отримуємо доступ до кнопки button
const button = document.getElementById('submit')
// вішаємо на кнопку слуха4 події click
button.addEventListener('click', addItem)
const itemsContainer = document.querySelector('.container__items')
console.log(itemsContainer.children)

// ДОДАЄМО ЕЛЕМЕНТ //
function addItem (e) {
  e.preventDefault()

  //   отримуємо зна4ення, введене в input
  let inputValue = document.querySelector('.input-value').value

  if (inputValue != '') {
    const newDiv = document.createElement('div')
    newDiv.className = 'item-content'
    newDiv.innerText = inputValue

    const newButton = document.createElement('button')
    newButton.className = 'remove-item'
    newButton.innerText = 'Х'
    newDiv.appendChild(newButton)

    itemsContainer.appendChild(newDiv)
    document.querySelector('.input-value').value = ''
    document.querySelector('.input-value').focus()
  } else {
    return ''
  }
}

// =================================== //
// ======== ВИДАЛЯЄМО ЕЛЕМЕНТ ======== //
// =================================== //

// отримуємо доступ до контейнера з переліок позицій
const removeButton = document.querySelector('.container__items')

removeButton.addEventListener('click', removeItem)

function removeItem (e) {
  itemsContainer.removeChild(e.target.parentElement)
}
