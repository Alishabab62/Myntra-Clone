// ==========================Go to Home Page=======================================

const logo = document.querySelector(".logo");

logo.addEventListener("click", () => {
  location = "../index.html";
});

let totalMrp = localStorage.getItem("totalMrp");
let totalProduct = localStorage.getItem("totalProduct");
document.querySelector("#totalProduct").innerText = totalProduct;
document.querySelector("#side").innerText = totalMrp;
let updatedPrice = totalMrp - Math.floor((totalMrp * 40) / 100);
document.querySelector("#colorc").innerText = `-${updatedPrice}`;
document.querySelector(".totalPriceAfterDiscount").innerText =
  totalMrp - updatedPrice;
