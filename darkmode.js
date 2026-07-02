const toggleBtn = document.getElementById("toggleBtn");

toggleBtn.addEventListener("click", function () {

    document.body.classList.toggle("dark");

    if (document.body.classList.contains("dark")) {
        toggleBtn.innerHTML = "☀️ Light Mode";
    } else {
        toggleBtn.innerHTML = "🌙 Dark Mode";
    }

});