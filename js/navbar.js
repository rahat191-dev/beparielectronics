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

document.addEventListener('click', (event) => {
  const nav = document.getElementById('navbar');
  const menuToggle = document.querySelector('.menu-toggle');

  if (nav && menuToggle) {
    if (nav.classList.contains('show') && !nav.contains(event.target) && !menuToggle.contains(event.target)) {
      nav.classList.remove('show');
    }
  }
});