const darkModeToggle = document.getElementById('dark-mode-toggle');
const body = document.body;
let darkModeMediaQuery; // Declare the variable outside of the function

// Function to toggle dark mode
function toggleDarkMode() {
  body.classList.toggle('dark-mode');
}

// Function to set dark mode based on user preference
function setDarkMode() {
  darkModeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)'); // Assign the variable here

  if (darkModeMediaQuery.matches) {
    body.classList.add('dark-mode');
  } else {
    body.classList.remove('dark-mode');
  }
}

setDarkMode(); // Set initial mode

darkModeMediaQuery.addEventListener('change', setDarkMode);

// Add event listener to the toggle button
darkModeToggle.addEventListener('click', toggleDarkMode);
