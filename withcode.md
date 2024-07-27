Sure, here's a comprehensive set of JavaScript notes that are readable and understandable.

### JavaScript Basics

#### Introduction
JavaScript is a versatile, high-level, interpreted programming language. It's commonly used in web development to create interactive effects within web browsers.

#### Syntax
JavaScript syntax is the set of rules, how JavaScript programs are constructed:

1. **Variables**
   - Declared using `var`, `let`, or `const`.
   ```javascript
   var name = "John";
   let age = 30;
   const isStudent = true;
   ```

2. **Data Types**
   - Primitive: String, Number, Boolean, Null, Undefined, Symbol.
   - Object: Array, Function, Object.
   ```javascript
   let string = "Hello, World!";
   let number = 25;
   let boolean = true;
   let object = { key: "value" };
   let array = [1, 2, 3];
   ```

3. **Operators**
   - Arithmetic: `+`, `-`, `*`, `/`, `%`.
   - Assignment: `=`, `+=`, `-=`, `*=`, `/=`.
   - Comparison: `==`, `===`, `!=`, `!==`, `>`, `<`, `>=`, `<=`.
   - Logical: `&&`, `||`, `!`.
   ```javascript
   let sum = 10 + 5;   // 15
   let isEqual = (10 == "10");  // true
   let isIdentical = (10 === "10");  // false
   ```

4. **Control Structures**
   - Conditional Statements: `if`, `else if`, `else`, `switch`.
   - Loops: `for`, `while`, `do...while`, `for...of`, `for...in`.
   ```javascript
   if (age > 18) {
     console.log("Adult");
   } else {
     console.log("Minor");
   }

   for (let i = 0; i < 5; i++) {
     console.log(i);
   }
   ```

### Functions

Functions are blocks of code designed to perform particular tasks.

```javascript
function greet(name) {
  return "Hello " + name;
}
let greeting = greet("John"); // "Hello John"
```

- **Arrow Functions**: A concise way to write functions.
```javascript
const greet = (name) => "Hello " + name;
```

### Objects

Objects are collections of key-value pairs.

```javascript
let person = {
  name: "John",
  age: 30,
  greet: function() {
    console.log("Hello, " + this.name);
  }
};
person.greet(); // "Hello, John"
```

### Arrays

Arrays are used to store multiple values in a single variable.

```javascript
let fruits = ["Apple", "Banana", "Cherry"];
console.log(fruits[1]); // "Banana"
```

- **Array Methods**:
  - `push()`: Adds a new element to the end.
  - `pop()`: Removes the last element.
  - `shift()`: Removes the first element.
  - `unshift()`: Adds a new element to the beginning.
  - `forEach()`: Calls a function for each array element.
  ```javascript
  fruits.push("Orange"); // ["Apple", "Banana", "Cherry", "Orange"]
  fruits.pop(); // ["Apple", "Banana", "Cherry"]
  fruits.forEach(fruit => console.log(fruit));
  ```

### ES6 Features

#### Let and Const

`let` and `const` provide block scope variables.

```javascript
let x = 10;
const y = 20;
```

#### Template Literals

Template literals allow embedded expressions.

```javascript
let name = "John";
let greeting = `Hello, ${name}`;
```

#### Destructuring

Destructuring assignment simplifies extracting data from arrays or objects.

```javascript
let [a, b] = [10, 20];
let {name, age} = {name: "John", age: 30};
```

#### Spread and Rest Operators

The spread operator `...` expands an array or object, while the rest operator `...` collects elements into an array.

```javascript
let arr1 = [1, 2, 3];
let arr2 = [...arr1, 4, 5, 6]; // [1, 2, 3, 4, 5, 6]

function sum(...args) {
  return args.reduce((a, b) => a + b, 0);
}
sum(1, 2, 3); // 6
```

### Asynchronous JavaScript

#### Callbacks

Functions passed as arguments to other functions, called after the completion of a task.

```javascript
function fetchData(callback) {
  setTimeout(() => {
    callback("Data fetched");
  }, 1000);
}
fetchData(data => console.log(data)); // "Data fetched"
```

#### Promises

Promises represent a value which may be available now, or in the future, or never.

```javascript
let promise = new Promise((resolve, reject) => {
  let success = true;
  if (success) {
    resolve("Data fetched");
  } else {
    reject("Error");
  }
});

promise.then(data => console.log(data)).catch(error => console.log(error));
```

#### Async/Await

Simplifies working with promises.

```javascript
async function fetchData() {
  try {
    let data = await promise;
    console.log(data);
  } catch (error) {
    console.log(error);
  }
}
fetchData();
```

### DOM Manipulation

JavaScript can change HTML content and attributes.

#### Selecting Elements

```javascript
let element = document.getElementById("myId");
let elements = document.getElementsByClassName("myClass");
let tags = document.getElementsByTagName("p");
let query = document.querySelector(".myClass");
```

#### Changing Content and Attributes

```javascript
element.innerHTML = "New Content";
element.setAttribute("class", "newClass");
```

#### Event Listeners

```javascript
element.addEventListener("click", function() {
  console.log("Element clicked");
});
```

### Conclusion

JavaScript is a powerful and essential language for modern web development. Understanding its basics, functions, objects, and modern ES6 features, as well as its asynchronous capabilities and DOM manipulation techniques, will give you a strong foundation to build upon.