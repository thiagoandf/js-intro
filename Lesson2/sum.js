

const sum = (a, b) => {
  // console.log(a + b)

  return a + b
}

const random1 = Math.random()
const random2 = Math.random()

const result = sum(
  sum(
    sum(random1, random2),
    random2),
  random2)

console.log(result)