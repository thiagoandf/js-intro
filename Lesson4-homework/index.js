function getElements() {
  const input = document.getElementById('todoInput')
  const button = document.getElementById('submitButton')
  const todoList = document.getElementById('todoList')
  const completedList = document.getElementById('completedList')


  return {
    input: input,
    button: button,
    todoList: todoList,
    completedList: completedList,
  }
}

const todos = []

const completedTodos = []

function getInputValue() {
  const elements = getElements()
  if (elements.input !== null) {
    const value = String(elements.input.value)

    todos.push(value)

    addItemtotheList(value)

    elements.input.value = ""
  }
}

function addItemtotheList(item) {
  const elements = getElements()

  if (elements.todoList !== null) {
    const li = document.createElement('li')
    const checkbox = document.createElement('input')
    const label = document.createElement('label')
    const deleteButton = document.createElement('button')

    li.id = item

    checkbox.type = 'checkbox'
    checkbox.id = item
    checkbox.setAttribute('onclick', 'addItemtoCompleted()')

    label.innerText = item
    label.setAttribute('for', item)

    deleteButton.id = 'deleteItem'
    deleteButton.textContent = 'Delete'
    deleteButton.addEventListener('click', function() {
      deleteItems(item);
    });

    li.append(checkbox, label, deleteButton)
    elements.todoList.append(li)

      }
}

function addItemtoCompleted(item) {
  const elements = getElements()

  const li = document.createElement('li')
  const checkbox = document.createElement('input')
  const label = document.createElement('label')

  checkbox.type = 'checkbox'
  checkbox.id = item
  checkbox.setAttribute('onclick', 'addItemtotheList()')

  label.innerText = item
  label.setAttribute('for', item)

  li.append(checkbox, label)
  elements.completedList.append(li)

  console.log("Checkbox is checked.")
  
}

function deleteItems(item) {
  const elements = getElements()
  const li = document.getElementById(item)

  elements.todoList.removeChild(li)

  const indexOfItem = todos.indexOf(item)

  todos.splice(indexOfItem, 1)

  console.log("Button pressed")
}