var icon = document.getElementById("icon");

function toggleDarkMode() {
    document.body.classList.toggle("dark");
    if (document.body.classList.contains("dark")) {
        icon.src = "sun.png"; // Update with your image filename for the light mode
    } else {
        icon.src = "moon.png"; // Update with your image filename for the dark mode
    }
}
