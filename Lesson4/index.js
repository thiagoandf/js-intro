function getElements() {
  const input = document.getElementById('todoInput')
  const button = document.getElementById('submitButton')
  const list = document.getElementById('todosList')


  return {
    input: input,
    button: button,
    list: list,
  }
}

const todos = []

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

  if (elements.list !== null) {
    const li = document.createElement('li')
    const checkbox = document.createElement('input')
    const label = document.createElement('label')

    checkbox.type = 'checkbox'
    checkbox.id = item

    label.innerText = item
    label.setAttribute('for', item)

    li.append(checkbox, label)
    elements.list.append(li)
  }
}
