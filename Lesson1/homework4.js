const randomiser1 = document.getElementById('random1')
const randomiser2 = document.getElementById('random2')
const total = document.getElementById('result')

function createRandoms() {
randomiser1.textContent = Math.floor(Math.random() * 1000)
randomiser2.textContent = Math.floor(Math.random() * 1000)
}

function addRandoms() {
    total.textContent =   parseInt(randomiser1.textContent) + parseInt(randomiser2.textContent)
}

function subtractRandoms() {
    total.textContent =   parseInt(randomiser1.textContent) - parseInt(randomiser2.textContent)
}

function multiplyRandoms() {
    total.textContent =   parseInt(randomiser1.textContent) * parseInt(randomiser2.textContent)
}

function divideRandoms() {
    total.textContent =   parseInt(randomiser1.textContent) / parseInt(randomiser2.textContent)
}

function remainderRandoms() {
    total.textContent =   parseInt(randomiser1.textContent) % parseInt(randomiser2.textContent)
}