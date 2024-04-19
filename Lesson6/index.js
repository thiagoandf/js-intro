
function sum(num1, num2) {
  // console.log(num1 + num2)
  return num1 + num2
}

const theSum = sum(1, 2)

// console.log(theSum)

const todos = []

todos.push(1)

todos[0]

// console.log(todos[0])

const longArray = [1, 2, 3, 4, 5, 6, 7, '8', 9, 10, 11, {}, 13, 14, 15, 16, 17, 18, 19, 20]
longArray.length

for (let i = 0; i <= longArray.length; i++) {
  console.log(longArray[i], i)

  if (typeof longArray[i] === 'object') {
    console.log('Object')
    break
  }
  if (typeof longArray[i] === 'number') {
    console.log('Number')
    continue
  } else {
    break
  }
}

for (let item of longArray) {
  // console.log(item)
}

const cons = (item) => {
  console.log(item)
}

longArray.forEach(cons)

let thisIsAString = ''

longArray.forEach((item) => {
  thisIsAString += item
})

console.log(thisIsAString)

while (longArray.length > 0) {
  console.log(longArray.pop())
  console.log(longArray)
}
