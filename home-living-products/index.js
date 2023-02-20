let addProduct = document.getElementById("add-product");
let productDiv = "";
window.addEventListener("load", async () => {
  await fetch("https://myntraapi-5zfq.onrender.com/myntra/get/Home & Living")
    .then((data) => {
      return data.json();
    })
    .then((data2) => {
      for (let item of data2.products) {
        let product = document.createElement("div");
        product.classList = "product";
        product.innerHTML = ` <img src="${item.imageLink}" alt="">
      <div class="info-container">
        <div class="item-name">${item.brand}</div>
        <div class="description">${item.name}</div>
       <div class="add-to-wishlist-btn"><button id="wishlist-btn">WISHLIST</button></div>
      <div class="price">Rs.<span>${item.price}
      </span><span id="discount-price">${item.price * 2}
      </span><span id="discount-percentage">(50% OFF)</span></span></div>
  </div>`;
        addProduct.appendChild(product);
      }
    })
    .catch((error) => {
      console.log("Error:", error);
    });
});

addProduct = document.getElementById("add-product");
addProduct.addEventListener("click" , async (e) => {
  let item = e.target.parentElement.children[0].src;
  let brand = e.target.parentElement.children[1].children[0].innerText;
  let itemName = e.target.parentElement.children[1].children[1].innerText;
  let price =e.target.parentElement.children[1].children[3].children[0].innerText;
  console.log(item,brand,itemName,price);
  let userId=localStorage.getItem('number');
  const data = {
    "user":userId,
    "imageLink":`${item}`,
    "brand": `${brand}`,
    "productName": `${itemName}`,
    "price": Number(price)
  }
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


const loggedDiv=document.querySelector('.logged-div');
const userName = localStorage.getItem('userName');
const userNumber = localStorage.getItem('userNumber');
if(userName != null){
  loggedDiv.innerHTML = `<span>${userName}</span><br>
  <span>${userNumber}</span>`
  document.querySelector(".sign-up-div").style.display = "none";
  document.querySelector("#log-out").style.display = "block"
}
else{
  document.querySelector(".sign-up-div").style.display = "block";
}

const logOut = document.querySelector("#log-out");
logOut.addEventListener("click",()=>{
  localStorage.clear();
})




const header_men = document.querySelector(".header_men");
const header_women = document.querySelector(".header_women");
const header_kids = document.querySelector(".header_kids");
const header_home = document.querySelector(".header_home");
const header_beauty = document.querySelector(".header_beauty");
const header_studio = document.querySelector(".header_studio");
const header_profile = document.querySelector(".header_icon_div");
const logo = document.querySelector(".logo");

const men = document.querySelector(".men");
const women = document.querySelector(".women");
const kids = document.querySelector(".kids");
const home = document.querySelector(".home");
const beauty = document.querySelector(".beauty");
const studio = document.querySelector(".studio");
const profile = document.querySelector(".profile");
const profileMouseOut = document.querySelector(".header_profile_submenu_div");

men.addEventListener('mouseover',()=>{
  men.style.display="flex"
})
men.addEventListener('mouseout',()=>{
  men.style.display="none"
})

women.addEventListener('mouseover',()=>{
  women.style.display="flex"
})
women.addEventListener('mouseout',()=>{
  women.style.display="none"
})

kids.addEventListener('mouseover',()=>{
  kids.style.display="flex"
})
kids.addEventListener('mouseout',()=>{
  kids.style.display="none"
})

home.addEventListener('mouseover',()=>{
  home.style.display="flex"
})
home.addEventListener('mouseout',()=>{
  home.style.display="none"
})

beauty.addEventListener('mouseover',()=>{
  beauty.style.display="flex"
})
beauty.addEventListener('mouseout',()=>{
  beauty.style.display="none"
})

studio.addEventListener('mouseover',()=>{
  studio.style.display="flex"
})
studio.addEventListener('mouseout',()=>{
  studio.style.display="none"
})



document.querySelector(".profile-menu").addEventListener('mouseover',()=>{
  profile.style.display="block"
})
document.querySelector(".profile-menu").addEventListener('mouseout',()=>{
  profile.style.display="none"
})
profile.addEventListener('mouseover',()=>{
  profile.style.display="block"
})
profile.addEventListener('mouseout',()=>{
  profile.style.display="none"
})


function openSubmenuMen() {
  men.style.display = "flex";
}
function closeSubmenuMen() {
  men.style.display = "none";
}
function openSubmenuWomen() {
  women.style.display = "flex";
}
function closeSubmenuWomen() {
  women.style.display = "none";
}
function openSubmenuKids() {
  kids.style.display = "flex";
}
function closeSubmenuKids() {
  kids.style.display = "none";
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
logo.addEventListener("click", () => {
  location = "index.html";
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

// ===================== Sale End Timer=================================

const startingTime = 60;
let time = startingTime * 60;

const timer = document.querySelector(".timer");

setInterval(timeupdate, 1000);

function timeupdate() {
  const min = Math.floor(time / 60);
  let sec = time % 60;
  timer.innerHTML = `${"00"}:${min}: ${sec}`;
  time--;
}