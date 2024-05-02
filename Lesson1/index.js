function changeTextWhenClicked() {
    console.log('working')
    const textDiv = document.getElementById("text")
    textDiv.textContent = Math.random()
}

let guestName = 'Hanefi'
let guestSurname = 'Gürler'
const fullName = guestName + guestSurname

const currentYear = 2023
let userAge = 29
let birthYear = currentYear - userAge
let birthDay = 8 + "."
let birthMonth = 8 + "."

const birthDate = birthDay + birthMonth + birthYear
console.log(fullName + birthDate)

// console.log("I'm loaded")

