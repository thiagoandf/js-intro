const one = 1
const two = 2.1

const str = 'Hello'

const arr = [1, 2, 3, 4, 5]

arr[0] // 1

const mtx = [[1, 2, 3], [4, 5, 6]]

arr[0][0] // 1

const obj = {
  'one': 1,
  'two': 2,

  sum: (num1, num2) => {
    return num1 + num2
  }
}

obj.one // 1
obj.two // 2

obj.sum()

const hanefi = {
  sex: 'male',
  age: 30,
  profession: 'Designer god',
}

const hanefi2 = [
  'male', 30, 'Designer god'
]

const thiago = {
  sex: 'male',
  age: 27,
  profession: "Pretends to know what he's doing"
}

const empl = [hanefi, thiago]

empl[0].sex // male
empl[1].sex // male

hanefi.profession // 'Designer god'

const event = {
  target: {
    value: 'input',
    textContent: 'The text',
    
    coordinates: {
      x: 123,
      y: 5,
    }
  }
}

event.target.coordinates.x // 123

let position = 'y'

event.target.coordinates[position] // 5
// event.target.coordinates.x

// if else

if (event.target.coordinates.x <= 1 && position === 'x') {
  console.log('WHYYYY')
} else if (position === 'x' || (event.target.coordinates.y >= 10 && event.target.coordinates.x >= 100)) {
  console.log('EXXXX')
} else {
  console.log('No way')
}
