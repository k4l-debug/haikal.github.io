const toggleBtn = document.getElementById("darkModeToggle");

toggleBtn.addEventListener("click", () => {
    document.body.classList.toggle("light-mode");
    toggleBtn.textContent = document.body.classList.contains("light-mode") ? "☀️" : "🌙";
});
