// Select the button element
// const button = document.getElementById('hoverButton');
const button=document.getElementById('hoverButton');

// Function to change the background color when hovered
// function handleMouseOver() {
//     button.style.backgroundColor = 'lightgreen';
// }
function handleMouseOver(){
    button.style.backgroundColor='lightgreen';
}

// Function to revert the background color when the mouse leaves
function handleMouseOut(){
    button.style.backgroundColor='blue';
}

// Attach event listeners to the button
// button.addEventListener('mouseover', handleMouseOver);
// button.addEventListener('mouseout', handleMouseOut);
button.addEventListener('mouseover',handleMouseOver);
button.addEventListener('mouseout',handleMouseOut);