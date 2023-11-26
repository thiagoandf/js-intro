### JavaScript Basics: 
 JavaScript is a scripting language that allows you to create dynamically updating content, control multimedia, animate images, and much more
 
### Environment Setup
Set up a text editor (like VS Code) and how to run JavaScript in the browser console.

### Syntax and Structure
Comments, semicolons, case sensitivity, and naming conventions.

### Variables
Introduce var, let, and const, and discuss when to use each.

- **`var`**:
  - Think of `var` as the old way of declaring variables in JavaScript. It's like a label that you put on a box, where you can change what's inside the box, or even swap it with another box.
  - However, `var` can sometimes be tricky. It has a broader scope, meaning it can be seen and used in more places in your code, which sometimes leads to unexpected results (especially in loops or if-statements).

- **`let`**:
  - `let` is a newer way to declare variables, introduced to fix some of the issues with `var`. It's like putting a label on a box, but this label is more strict about where it can be seen and used.
  - You can change what's inside the box, but you can't swap it with a completely different box. This makes it safer and more predictable, especially in loops and conditional blocks.

- **`const`**:
  - `const` is similar to `let` in terms of scope, but with `const`, once you put something in the box and label it, you can't change what's inside it. It's constant, as the name suggests.
  - Use `const` when you're sure that the value should not change throughout your code. For example, if you have a value for the number of days in a week, you'd use `const` since that number will always be 7.

In short, you can think of `var` as a flexible, old-school label, `let` as a more modern, safer label, and `const` as a permanent label. For modern JavaScript coding, it's recommended to use `let` and `const` for their improved readability and functionality.

### Data Types
Primitives like strings, numbers, booleans, null, undefined, and the concept of typeof.

### Basic Operators
Arithmetic operators, string concatenation, assignment operators, and the basics of operator precedence.
 
### Interacting with HTML/CSS
How JavaScript interacts with HTML/CSS, setting the stage for more in-depth exploration in the next lesson.

### **The DOM**
What the DOM is and how it represents the structure of web pages. How JavaScript can be used to select, add, remove, and modify HTML elements.

### **Selecting Elements**
`document.getElementById`, `document.querySelector`, etc., for selecting elements

### Homework
1. Experiment with each data type and log them to the console.
2. Write simple math equations and string concatenations.
3. Create a simple HTML page and link a JavaScript file, then write a script that logs something to the console when the page loads.
4. Create an HTML and JS file pair.
	1. The HTML file should have 2 divs, each with a random value.
	2. The HTML should have a `+` button, a `-` button, a `*` button, a `/` button and a `%` button.
	3. When you click on each of the buttons, a function should get executed that gets the values from the random numbers and executes said math operation to them.
	4. The result should be shown in another div under the buttons
	5. Bonus points: You get the value of the random numbers only once each, and reuse them on all the functions.
