const darkModeToggle = document.getElementById("dark-mode-toggle");
const body = document.body;
let darkModeMediaQuery;

// Function to toggle dark mode
function toggleDarkMode() {
	body.classList.toggle("dark-mode");
}

// Function to set dark mode based on user preference
function setDarkMode() {
	darkModeMediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

	if (darkModeMediaQuery.matches) {
		body.classList.add("dark-mode");
	} else {
		body.classList.remove("dark-mode");
	}
}

setDarkMode();

darkModeMediaQuery.addEventListener("change", setDarkMode);

// Add event listener to the toggle button
darkModeToggle.addEventListener("click", toggleDarkMode);
