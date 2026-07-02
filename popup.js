const openBtn = document.getElementById("openBtn");
const closeBtn = document.getElementById("closeBtn");
const modal = document.getElementById("modal");

// Open popup
openBtn.addEventListener("click", function () {
    modal.style.display = "block";
});

// Close popup
closeBtn.addEventListener("click", function () {
    modal.style.display = "none";
});

// Close when clicking outside the popup
window.addEventListener("click", function (event) {
    if (event.target === modal) {
        modal.style.display = "none";
    }
});