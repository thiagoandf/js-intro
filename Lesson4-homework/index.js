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

    checkbox.type = 'checkbox'
    checkbox.id = item
    checkbox.setAttribute('onclick', 'addItemtoCompleted()')

    label.innerText = item
    label.setAttribute('for', item)

    li.append(checkbox, label)
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
  elements.todoList.append(li)

  console.log("Checkbox is checked.");
  
}
