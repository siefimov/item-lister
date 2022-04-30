const form = document.getElementById('addForm')
const itemList = document.getElementById('items')
const filter = document.getElementById('filter')

// Form submit event
form.addEventListener('submit', addItem)
itemList.addEventListener('click', removeItem)
filter.addEventListener('keyup', filterItems)

// ADD ITEM //
function addItem (e) {
  e.preventDefault()

  // Get input value
  let newItem = document.getElementById('item').value
  if (newItem != '') {
    // Create new li element
    let li = document.createElement('li')
    // Add class
    li.className = 'list-group-item'
    // Add tet node with imput value
    li.appendChild(document.createTextNode(newItem))

    //Create del button element
    const deleteBtn = document.createElement('button')

    // add classes to del button
    deleteBtn.className = 'btn btn-danger btn-sm float-right delete'

    deleteBtn.appendChild(document.createTextNode('x'))

    li.appendChild(deleteBtn)

    itemList.appendChild(li)

    document.getElementById('item').value = ''
  } else {
    console.log(1)
  }
}

// REMOVE ITEM //
function removeItem (e) {
  console.log(e.target.classList)

  if (e.target.classList.contains('delete')) {
    if (confirm('Are You Sure?')) {
      var li = e.target.parentElement
      itemList.removeChild(li)
    }
  }
}

// Filter Items //
function filterItems (e) {
  // convert text to lowercase
  var text = e.target.value.toLowerCase()
  // Get lis
  var items = itemList.getElementsByTagName('li')
  console.log(items)

  // Convert to an array
  // 1-st method
  // Array.from(items).forEach(function (item) ...
  // 2-nd method
  let itemsToArray = [...items]
  itemsToArray.forEach(item => {
    var itemName = item.firstChild.textContent
    if (itemName.toLowerCase().indexOf(text) != -1) {
      item.style.display = 'block'
    } else {
      item.style.display = 'none'
    }
  })
}
