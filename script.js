// Function to append value to the display
function appendValue(value) {
    document.getElementById('display').value += value;
}

// Function to clear the display
function clearDisplay() {
    document.getElementById('display').value = '';
}

// Function to calculate the result
function calculateResult() {
    try {
        const result = eval(document.getElementById('display').value);
        document.getElementById('display').value = result;
    } catch (error) {
        document.getElementById('display').value = 'Error';
    }
}

// Function to delete the last character
function deleteLast() {
    const display = document.getElementById('display');
    display.value = display.value.slice(0, -1);
}

// Get the theme toggle button
const toggleButton = document.getElementById('theme-toggle');

// Add event listener to toggle theme when button is clicked
toggleButton.addEventListener('click', () => {
    document.body.classList.toggle('dark'); // Toggle dark mode
    // Change button text based on theme
    if (document.body.classList.contains('dark')) {
        toggleButton.textContent = '☀️'; // Light mode icon
    } else {
        toggleButton.textContent = '🌙'; // Dark mode icon
    }
});
