// Select the display input
const display = document.querySelector('.display');

// Append characters to the display
function append(value) {
    display.value += value;
}

// Clear the display
function clear() {
    display.value = '';
}

// Evaluate the expression
function get_res() {
    try {
        display.value = eval(display.value);
    } catch (error) {
        display.value = 'Error';
    }
}