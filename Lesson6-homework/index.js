function getElements() {
    const input = document.getElementById('numberInput')
    const button = document.getElementById('submitButton')
    const pickedColors = document.getElementById('pickedColors')
  
  
    return {
      input: input,
      button: button,
      pickedColors: pickedColors,
    }
}

const colors = []


function getInputValue() {
    const elements = getElements()
    if (elements.input !== null) {
      const value = parseInt(elements.input.value)
      colors.length = 0
      document.getElementById('pickedColors').innerHTML = ''

      pickColors(value)
    }
}

function pickColors(item) {
  const elements = getElements()

  for (let i = 0; i <= item-1; i++){
    const color = getRandomColor()
    colors.push(color)

    const li = document.createElement('li')
    const colorBox = document.createElement('div')

    li.id = color
    colorBox.classList.add('colorBox')
    colorBox.style.backgroundColor = color

    li.append(colorBox)
    elements.pickedColors.append(li)
  }
}

function getRandomColor() {
  // Generates a random integer between 0 and 255 for each color component
  const red = Math.floor(Math.random() * 256);
  const green = Math.floor(Math.random() * 256);
  const blue = Math.floor(Math.random() * 256);

  // Converts each component to a hexadecimal string and ensures it has two digits
  const redHex = red.toString(16).padStart(2, '0');
  const greenHex = green.toString(16).padStart(2, '0');
  const blueHex = blue.toString(16).padStart(2, '0');

  // Concatenates the hex strings and returns the color
  return `#${redHex}${greenHex}${blueHex}`;
  
}
