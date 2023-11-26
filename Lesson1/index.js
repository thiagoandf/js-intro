function thisIsMyFunction() {
  console.log('Poop')


  const hello = document.getElementById('hello')
  hello.textContent = 1234

  const floating = parseFloat(hello.textContent)

  console.log(hello.textContent)

  console.log(floating)
  parseInt(hello.textContent)
}

