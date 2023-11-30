function thisIsMyFunction() {
  console.log('Poop')


  const hello = document.getElementById('hello')
  hello.textContent = 1234

  const floating = parseFloat(hello.textContent)

  console.log(hello.textContent)

  console.log(floating)
  parseInt(hello.textContent)
}

document.getElementsByClassName('hello-text')[0].textContent = 'Pooping'

document.querySelector('div')
const helloElement = document.querySelector('.hello-text')
document.querySelector('#hello')

document.querySelectorAll('div.hello-text p')

// --------

helloElement.style = 'color: pink;'
console.log(helloElement.getClientRects())

// ------ Events

// document.addEventListener('click', thisIsMyFunction)

document.getElementById('thisButton').addEventListener('click', thisIsMyFunction)


const sum = (a, b) => {
  // console.log(a + b)

  return a + b
}

const input = document.getElementById('totp')
    
input.addEventListener('keydown', (event) => {
  event.preventDefault()

  const random1 = Math.random()
  const random2 = Math.random()

  const result = sum(random1, random2)

  input.setAttribute('value', result)

  console.log(result)
})
