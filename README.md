In JavaScript, you can create a hover effect by using event listeners for mouse events such as `mouseover` and `mouseout`. These events allow you to detect when the mouse enters or leaves an element, enabling you to change styles or trigger other actions.

Here's a step-by-step guide to creating a simple hover effect using JavaScript:

### Step 1: HTML Structure

First, create an HTML element that you want to apply the hover effect to. For example, let's create a button:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Hover Effect Example</title>
    <style>
        #hoverButton {
            padding: 10px 20px;
            background-color: lightblue;
            border: none;
            cursor: pointer;
            transition: background-color 0.3s;
        }
    </style>
</head>
<body>
    <button id="hoverButton">Hover over me!</button>

    <script src="script.js"></script>
</body>
</html>
```

### Step 2: JavaScript for Hover Effect

Create a `script.js` file to add the JavaScript code that handles the hover effect:

```javascript
// Select the button element
const button = document.getElementById('hoverButton');

// Function to change the background color when hovered
function handleMouseOver() {
    button.style.backgroundColor = 'lightgreen';
}

// Function to revert the background color when the mouse leaves
function handleMouseOut() {
    button.style.backgroundColor = 'lightblue';
}

// Attach event listeners to the button
button.addEventListener('mouseover', handleMouseOver);
button.addEventListener('mouseout', handleMouseOut);
```

### Step 3: Explanation

1. **HTML Structure:** We have a simple HTML document with a button element. The button has an ID of `hoverButton` and some initial styles.
2. **CSS Styles:** The button has basic styles including a transition effect to make the background color change smoothly.
3. **JavaScript Code:**
   - **Selecting the Element:** We use `document.getElementById('hoverButton')` to select the button element.
   - **Event Listeners:** We add two event listeners to the button:
     - `mouseover` event triggers the `handleMouseOver` function, which changes the background color to light green.
     - `mouseout` event triggers the `handleMouseOut` function, which reverts the background color to light blue.

### Full Example

Here's the full code for both the HTML and JavaScript:

#### `index.html`
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Hover Effect Example</title>
    <style>
        #hoverButton {
            padding: 10px 20px;
            background-color: lightblue;
            border: none;
            cursor: pointer;
            transition: background-color 0.3s;
        }
    </style>
</head>
<body>
    <button id="hoverButton">Hover over me!</button>

    <script src="script.js"></script>
</body>
</html>
```

#### `script.js`
```javascript
// Select the button element
const button = document.getElementById('hoverButton');

// Function to change the background color when hovered
function handleMouseOver() {
    button.style.backgroundColor = 'lightgreen';
}

// Function to revert the background color when the mouse leaves
function handleMouseOut() {
    button.style.backgroundColor = 'lightblue';
}

// Attach event listeners to the button
button.addEventListener('mouseover', handleMouseOver);
button.addEventListener('mouseout', handleMouseOut);
```

With this setup, the button will change its background color when you hover over it and revert back when you move the mouse away.