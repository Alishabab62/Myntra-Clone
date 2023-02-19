// ==========================Go to Home Page=======================================

const logo = document.querySelector(".logo");

logo.addEventListener("click", () => {
  location = "../index.html";
});

// ===================== Sale End Timer=================================

const startingTime = 60;
let time = startingTime * 60;

const timer = document.querySelector(".timer");

setInterval(timeupdate, 1000);

function timeupdate() {
  const min = Math.floor(time / 60);
  let sec = time % 60;

  timer.innerHTML = `${min}: ${sec}`;
  time--;
}

// ===========================vineet header js code start===========================

// ==============================For Laptop view===========================

// ===========================vineet header js code start==========================
const header_men = document.querySelector(".header_men");
const header_women = document.querySelector(".header_women");
const header_kids = document.querySelector(".header_kids");
const header_home = document.querySelector(".header_home");
const header_beauty = document.querySelector(".header_beauty");
const header_studio = document.querySelector(".header_studio");
const header_profile = document.querySelector(".header_icon_div");
// const logo = document.querySelector(".logo");

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