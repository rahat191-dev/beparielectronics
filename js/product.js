document.addEventListener("DOMContentLoaded", function() {
    fetch("product.html")
        .then(response => response.text())
        .then(data => {
            document.getElementById("product-placeholder").innerHTML = data;
        });
});

function goToForm(productName) {
  localStorage.setItem("selectedProduct", productName);
  window.location.href = "form.html";
}