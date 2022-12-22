const header_men = document.querySelector(".header_men");
const header_women = document.querySelector(".header_women");
const header_kids = document.querySelector(".header_kids");
const header_home = document.querySelector(".header_home");
const header_beauty = document.querySelector(".header_beauty");
const header_studio = document.querySelector(".header_studio");
const header_profile = document.querySelector(".header_icon_div");

const men = document.querySelector(".men");
const women = document.querySelector(".women");
const kids = document.querySelector(".kids");
const home = document.querySelector(".home");
const beauty = document.querySelector(".beauty");
const studio = document.querySelector(".studio");
const profile = document.querySelector(".profile");
const profileMouseOut = document.querySelector(".header_profile_submenu_div");

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
function openSubmenuHome() {
  home.style.display = "flex";
}
function closeSubmenuHome() {
  home.style.display = "none";
}
function openSubmenuBeauty() {
  beauty.style.display = "flex";
}
function closeSubmenuBeauty() {
  beauty.style.display = "none";
}
function openSubmenuStudio() {
  studio.style.display = "flex";
}
function closeSubmenuStudio() {
  studio.style.display = "none";
}
function openSubmenuProfile() {
  profile.style.display = "block";
}
function closeSubmenuProfile() {
  profile.style.display = "none";
}
header_men.addEventListener("mouseover", openSubmenuMen);
header_men.addEventListener("mouseout", closeSubmenuMen);
header_women.addEventListener("mouseover", openSubmenuWomen);
header_women.addEventListener("mouseout", closeSubmenuWomen);
header_kids.addEventListener("mouseover", openSubmenuKids);
header_kids.addEventListener("mouseout", closeSubmenuKids);
header_home.addEventListener("mouseover", openSubmenuHome);
header_home.addEventListener("mouseout", closeSubmenuHome);
header_beauty.addEventListener("mouseover", openSubmenuBeauty);
header_beauty.addEventListener("mouseout", closeSubmenuBeauty);
header_studio.addEventListener("mouseover", openSubmenuStudio);
header_studio.addEventListener("mouseout", closeSubmenuStudio);
header_profile.addEventListener("mouseover", openSubmenuProfile);
profileMouseOut.addEventListener("mouseout", closeSubmenuProfile);

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

let addProduct = document.getElementById("add-product");
let productDiv = "";
fetch("https://fakestoreapi.com/products")
  .then((data) => {
    return data.json();
  })
  .then((data2) => {
    for (let item of data2) {
      let product = document.createElement("div");
      product.classList = "product";
      product.innerHTML = `<img src="${item.image}" alt="">
        <div class="item-name">${item.title}</div>
        <div class="description">${item.description}</div>
        <div class="price">Rs.${item.price}<span id="discount-price">${
        item.price * 2
      }</span><span id="discount-percentage">(50% OFF)</span></span></div>`;
      addProduct.appendChild(product);
      console.log(item);
    }
  });
