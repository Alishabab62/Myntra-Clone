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
  men.style.display = "flex";
}
function closeSubmenuMen() {
  men.style.display = "none";
}
function openSubmenuWomen() {
  men.style.display = "flex";
}
function closeSubmenuWomen() {
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

const logo = document.querySelector(".logo");

logo.addEventListener("click", () => {
  location = "../index.html";
});

// ===========================For Tab and Mobile view=================

const burgerIcon = document.querySelector("#burgerIcon");
const sidebar = document.querySelector(".sidebarMenu");

function openSideBar() {
  if (sidebar.style.display !== "block") {
    sidebar.style.display = "block";
  } else {
    sidebar.style.display = "none";
  }
}

burgerIcon.addEventListener("click", openSideBar);



window.addEventListener('load', renderProduct)


let addProduct = document.getElementById("add-product");
function renderProduct(){
fetch("https://myntraapi-5zfq.onrender.com/myntra/get")
  .then((data) => {
    return data.json();
  })
  .then((data2) => {
    for (let item of data2.products) {
      let product = document.createElement("div");
      product.classList = "product";
      product.innerHTML=`
      <img src="${item.imageLink}" alt="">
      <div class="info-container">
        <div class="item-name">${item.brand}</div>
        <div class="description">${item.name}</div>
       <div class="add-to-wishlist-btn"><button id="wishlist-btn">WISHLIST</button></div>
      <div class="price">Rs.<span>${item.price}
      </span><span id="discount-price">${item.price*2}
      </span><span id="discount-percentage">(50% OFF)</span></span></div>
  </div>`
      addProduct.appendChild(product);
    }
  })
  .catch((error) => {
    console.log("Error:", error);
  });
}


addProduct = document.getElementById("add-product");
addProduct.addEventListener("click", async (e) => {
  let item = e.target.parentElement.children[0].src;
  let brand = e.target.parentElement.children[1].children[0].innerText;
  let itemName = e.target.parentElement.children[1].children[1].innerText;
  let price =e.target.parentElement.children[1].children[3].children[0].innerText;
  console.log(e.target.parentElement.children[1].children[3].children[0].innerText);
  const data = {
    "user":1234,
    "imageLink":`${item}`,
    "brand": `${brand}`,
    "productName": `${itemName}`,
    "price": Number(price)
  }
  console.log(data)
const response = await fetch('https://myntraapi-5zfq.onrender.com/myntra/addtobag', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify(data)
})
const res = await response.json();
console.log(res)
});











// addProduct = document.getElementById("add-product");
// let productArray = [];
// addProduct.addEventListener("click", (e) => {
//   let item = e.target.parentElement.children[0].src;
//   let itemName = e.target.parentElement.children[1].children[0].innerText;
//   let description = e.target.parentElement.children[1].children[1].innerText;
//   let price =e.target.parentElement.children[1].children[3].firstElementChild.innerText;
//   console.log(item,itemName,description,price);
//   if (productArray.length == 0) {
//     productArray.push({
//       itemLink: item,
//       itemName: itemName,
//       description: description,
//       price: price,
//     });
//     localStorage.setItem("productArray", JSON.stringify(productArray));
//   } else {
//     let flag = true;
//     let a = localStorage.getItem("productArray");
//     let productArrayy = JSON.parse(a);
//     productArrayy.forEach((value, i) => {
//       if (value.itemLink == item) {
//         flag = false;
//       }
//     });
//     if (flag) {
//       productArray.push({
//         itemLink: item,
//         itemName: itemName,
//         description: description,
//         price: price,
//       });
//     }
//     localStorage.setItem("productArray", JSON.stringify(productArray));
//   }
// });


