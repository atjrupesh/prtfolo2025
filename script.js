// Dropdown functionality
const dropdownButtons = document.querySelectorAll(".dropdown-btn");

dropdownButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const dropdownText = button.nextElementSibling;

    // Close all other dropdowns
    dropdownButtons.forEach((btn) => {
      if (btn !== button) {
        const otherDropdownText = btn.nextElementSibling;
        otherDropdownText.style.display = "none";
        btn.textContent = "▼"; // Reset icon
      }
    });

    // Toggle the clicked dropdown
    if (dropdownText.style.display === "block") {
      dropdownText.style.display = "none";
      button.textContent = "▼"; // Reset icon
    } else {
      dropdownText.style.display = "block";
      button.textContent = "▲"; // Change icon
    }
  });
});

// Theme toggle logic
const themeToggle = document.getElementById("themeToggle");
const body = document.body;

// Check and apply the previously selected theme
const savedTheme = localStorage.getItem("theme");
if (savedTheme) {
  body.classList.add(savedTheme);
  themeToggle.textContent = savedTheme === "day-theme" ? "🌙" : "🌞"; // Set the toggle button's text accordingly
} else {
  // Default to "day-theme" if no theme is saved
  body.classList.add("day-theme");
  themeToggle.textContent = "🌙";
}

// Toggle theme when the button is clicked
themeToggle.addEventListener("click", () => {
  if (body.classList.contains("night-theme")) {
    body.classList.remove("night-theme");
    body.classList.add("day-theme");
    themeToggle.textContent = "🌙"; // Change to "night" icon
    localStorage.setItem("theme", "day-theme");
  } else {
    body.classList.remove("day-theme");
    body.classList.add("night-theme");
    themeToggle.textContent = "🌞"; // Change to "day" icon
    localStorage.setItem("theme", "night-theme");
  }
});

// Ensure the theme is applied on page load
window.addEventListener("load", function () {
  const skillSection = document.getElementById("skills");
  skillSection.classList.add("visible"); // Make section visible after page load
});

// Optional: Add a scale effect on hover for each skill item
document.querySelectorAll("#skills li").forEach(function (item) {
  item.addEventListener("mouseenter", function () {
    item.style.transform = "scale(1.05)";
  });
  item.addEventListener("mouseleave", function () {
    item.style.transform = "scale(1)";
  });
});
