let resultNumber = document.getElementById('result');

resultNumber.textContent = parseInt(resultNumber.textContent)

// Concatenation of numbers
function concatenation(event) {
  // let intResultNumber = parseInt(resultNumber.textContent);
  // let str1 = intResultNumber.toString();
  // let str2 = event.target.id;
  // let resultString = str1 + str2;
  // resultNumber.textContent = parseInt(resultString);

  let str2 = event.target.id;
  resultNumber.textContent = parseInt(resultNumber.textContent + str2);
};


// Reset Function
function resetCalculator() {
    resultNumber.textContent = 0;
};

let a, b, c;

// Keeping the first number
function memory(event) {
    a = parseInt(resultNumber.textContent);
    resultNumber.textContent = 0;
    b = event.target.id;
}


// Calculations

const add = (x, z) => {
    return x + z
};

const sub = (x, z) => {
    return x - z
};

const mult = (x, z) => {
    return x * z
};

const div = (x, z) => {
    return x / z
};

const calc = (x, operation, z) => {
    return operation(x, z);
};


//Equals
function equals() {
    let c = parseInt(resultNumber.textContent);
  resultNumber.textContent = calc(a, eval(b), c);
};
