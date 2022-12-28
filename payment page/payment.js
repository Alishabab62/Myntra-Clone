// ==========================Go to Home Page=======================================

const logo = document.querySelector(".logo");

logo.addEventListener("click", () => {
  location = "../index.html";
});

let totalMrp = localStorage.getItem("totalMrp");
let totalProduct = localStorage.getItem("totalProduct");
document.querySelector("#totalProduct").innerText = totalProduct;
document.querySelector("#side").innerText = totalMrp;
let discountedProce= Math.floor((totalMrp * 40) / 100);
let updatedPrice = totalMrp - discountedProce;
document.querySelector("#colorc").innerText = `-${discountedProce}`;
document.querySelector(".totalPriceAfterDiscount").innerText = updatedPrice;
