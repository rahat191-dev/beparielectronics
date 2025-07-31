document.addEventListener("DOMContentLoaded", function() {
    fetch("navbar.html")
        .then(response => response.text())
        .then(data => {
            document.getElementById("navbar-placeholder").innerHTML = data;
        });
});

function toggleMenu() {
  const nav = document.getElementById("navbar");
  nav.classList.toggle("show");
}