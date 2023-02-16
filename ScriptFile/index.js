// let loading=true;
// fetch('https://fakestoreapi.com/products').then((data)=>{
//     return data.json();
// }).then((data2)=>{
//     console.log(data2);
// }).catch((e)=>{
//     console.log(e);
// }).finally(()=>{
//     loading=false;
//     console.log("Done");
// });

// ===========================vineet header js code===========================

// ==============================For Laptop view===========================

const header_men = document.querySelector(".header_men");
const header_women = document.querySelector(".header_women");
const header_kids = document.querySelector(".header_kids");

const men = document.querySelector(".men");
const women = document.querySelector(".women");
const kids = document.querySelector(".kids");

function openSubmenuMen() {
  // console.log("vineet");
  men.style.display = "flex";
}
function closeSubmenuMen() {
  men.style.display = "none";
}
function openSubmenuWomen() {
  console.log(women);
  men.style.display = "flex";
}
function closeSubmenuWomen() {
  console.log(women);
  men.style.display = "none";
}
function openSubmenuKids() {
  men.style.display = "flex";
}
function closeSubmenuKids() {
  men.style.display = "none";
}
header_men.addEventListener("mouseover", openSubmenuMen);
header_men.addEventListener("mouseout", closeSubmenuMen);
header_women.addEventListener("mouseover", openSubmenuWomen);
header_women.addEventListener("mouseout", closeSubmenuWomen);
header_kids.addEventListener("mouseover", openSubmenuKids);
header_kids.addEventListener("mouseout", closeSubmenuKids);

// ===========================For Tab and Mobile view=================

const burgerIcon = document.querySelector("#burgerIcon");
const sidebar = document.querySelector(".sidebarMenu");

function openSideBar() {
  // console.log("vineet");
  // sidebar.style.display="block"
  if (sidebar.style.display !== "block") {
    sidebar.style.display = "block";
  } else {
    sidebar.style.display = "none";
  }
}

burgerIcon.addEventListener("click", openSideBar);
