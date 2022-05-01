// !ДОДАЄМО ЕЛЕМЕНТ //
// отримуємо доступ до кнопки button
const button = document.getElementById('submit')
// реєструємо функцію-обробник подій на кнопку (подія -click)
button.addEventListener('click', addItem)
// доступ до блоку з переліком позицій (item)
const itemsContainer = document.querySelector('.container__items')

function addItem (e) {
  e.preventDefault()

  //   отримуємо зна4ення, введене в input Add Items
  let inputValue = document.querySelector('.input-value').value

  if (inputValue != '') {
    // const newDiv = document.createElement('div')
    // newDiv.className = 'item-content'
    // newDiv.innerText = inputValue

    // const newButton = document.createElement('button')
    // newButton.className = 'remove-item'
    // newButton.innerText = 'Х'
    // newDiv.appendChild(newButton)

    // itemsContainer.appendChild(newDiv)

    const newBlock = `
    <div class="item-content"><span>${inputValue}</span>
                    <div class="button-items">
                        <button class="checked-item">&#128504</button>
                        <button class="remove-item">Х</button>
                    </div>
                  </div>
    `
    itemsContainer.insertAdjacentHTML('beforeend', newBlock)
    document.querySelector('.input-value').value = ''
    document.querySelector('.input-value').focus()
  } else {
    document.querySelector('.input-value').focus()
    // return ''
  }
}

// =================================== //
//! ======== ВИДАЛЯЄМО ЕЛЕМЕНТ ======== //
// =================================== //

// отримуємо доступ до контейнера з переліок позицій
const removeButton = document.querySelector('.container__items')
// реєструємо обробник подій (event handler)
removeButton.addEventListener('click', removeItem)

function removeItem (e) {
  if (e.target.classList.contains('remove-item')) {
    itemsContainer.removeChild(e.target.parentElement.parentElement)
  }
}

// ================================== //
//! ======== ШУКАЄМО ЕЛЕМЕНТИ ========= //
// =================================== //
// отримуємо доступ до поля з пошуком
let searchInput = document.querySelector('.search__input')

searchInput.addEventListener('keyup', searchItem)

function searchItem (e) {
  // отримуємо зна4ення із поля для пошуку
  let searchInputValue = document.querySelector('.search__input').value

  let items = document.querySelectorAll('.item-content')

  items.forEach(item => {
    if (item.innerText.indexOf(searchInputValue) != -1) {
      item.style.display = 'flex'
    } else {
      item.style.display = 'none'
    }
  })
}

// !  ПОМІ4АЄМО ЯК ВИКОНАНО

// отримуємо доступ до контейнера з переліок позицій
const doneButton = document.querySelector('.container__items')

// реєструємо обробник подій (event handler)
doneButton.addEventListener('click', doneItem)

function doneItem (e) {
  if (e.target.classList.contains('checked-item')) {
    console.log(e.target)

    // визна4аємо бітьківський елемент, у якоум міститься Y
    const doneItem = e.target.parentElement.parentElement
    // беремо текст Позиції
    const doneItemContent = doneItem.firstElementChild.innerText

    // текущая дата
    const date = new Date()
    const localDate = `${String(date.getDate()).padStart(2, '0')} . ${String(
      date.getMonth() + 1
    ).padStart(2, '0')} . 
      ${date.getFullYear()}`

    const itemForDoneContainer = `
    <div class="done-content" id="done">${doneItemContent}, - ${localDate}
       <button class="checked-item">&#128504</button>
    </div>
    `
    document
      .querySelector('.done-items__title')
      .insertAdjacentHTML('afterend', itemForDoneContainer)
  }
  // видаляємо Позицію із списку
  itemsContainer.removeChild(e.target.parentElement.parentElement)
}
