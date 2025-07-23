setTimeout(() => {
  document.getElementById('welcome-screen').style.display = 'none';
  document.getElementById('main-content').style.display = 'block';
}, 3000);6

function goToForm(productName) {
  // Local storage e product name save kore
  localStorage.setItem("selectedProduct", productName);
  // form.html e niye jay
  window.location.href = "form.html";
}
