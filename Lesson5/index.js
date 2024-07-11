function getElements() {
  const input = document.getElementById('todoInput')
  const button = document.getElementById('submitButton')
<<<<<<< HEAD
  const todoList = document.getElementById('todoList')
  const completedList = document.getElementById('completedList')
=======
  const list = document.getElementById('todosList')
>>>>>>> 580c67164e0f5d22ce3c5798af2018710b4576f1


  return {
    input: input,
    button: button,
<<<<<<< HEAD
    todoList: todoList,
    completedList: completedList,
=======
    list: list,
>>>>>>> 580c67164e0f5d22ce3c5798af2018710b4576f1
  }
}

const todos = []

<<<<<<< HEAD
const completedTodos = []

=======
>>>>>>> 580c67164e0f5d22ce3c5798af2018710b4576f1
function getInputValue() {
  const elements = getElements()
  if (elements.input !== null) {
    const value = String(elements.input.value)

<<<<<<< HEAD
=======
    todos.push(value)

>>>>>>> 580c67164e0f5d22ce3c5798af2018710b4576f1
    addItemtotheList(value)

    elements.input.value = ""
  }
}

function addItemtotheList(item) {
  const elements = getElements()

<<<<<<< HEAD
  if (elements.todoList !== null) {
    const li = document.createElement('li')
    const checkbox = document.createElement('input')
    const label = document.createElement('label')
    const deleteButton = document.createElement('button')

    todos.push({
      createdAt: new Date().getTime(),
      value: item,
      isCompleted: false,
    })

    li.id = item

    checkbox.type = 'checkbox'
    checkbox.id = item
    checkbox.setAttribute('onclick', 'addItemtoCompleted()')
=======
  if (elements.list !== null) {
    const li = document.createElement('li')
    const checkbox = document.createElement('input')
    const label = document.createElement('label')

    checkbox.type = 'checkbox'
    checkbox.id = item
>>>>>>> 580c67164e0f5d22ce3c5798af2018710b4576f1

    label.innerText = item
    label.setAttribute('for', item)

<<<<<<< HEAD
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

  const indexOfItem = todos.findIndex( (todoItem) => todoItem.value === item)

  todos.splice(indexOfItem, 1)

  console.log("Button pressed")
}
=======
    li.append(checkbox, label)
    elements.list.append(li)
  }
}

function removeItem(item) {
  const elements = getElements()



}

function findItemIndex(todoItem) {
  return todoItem.value === item
}
>>>>>>> 580c67164e0f5d22ce3c5798af2018710b4576f1
