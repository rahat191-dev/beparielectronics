document.addEventListener("DOMContentLoaded", function() {
    fetch("product.html")
        .then(response => response.text())
        .then(data => {
            document.getElementById("product-placeholder").innerHTML = data;
        });
});

function goToForm(productName) {
  // Local storage e product name save kore
  localStorage.setItem("selectedProduct", productName);
  // form.html e niye jay
  window.location.href = "form.html";
}