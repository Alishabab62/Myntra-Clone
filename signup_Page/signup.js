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

const contactNumber = document.querySelector("#contactNumber");
const contactNumberLocalStorage = localStorage.getItem("number");
window.addEventListener("load", () => {
  contactNumber.innerText = contactNumberLocalStorage;
});

const password = document.querySelector(".password");
const fullName = document.querySelector(".full-name");
const email = document.querySelector(".email");
const gender = document.getElementsByName("gender");
const alternatePhoneNumber = document.querySelector(".alternate-phone-number");
const createButton = document.querySelector(".cretae-account-btn");
let selectedGender;

createButton.addEventListener("click", singUpDetailsSubmission);
async function singUpDetailsSubmission() {
  gender.forEach((gen) => {
    if (gen.checked) {
      selectedGender = gen;
    }
  });
  const data = {
    mobileNumber: `${alternatePhoneNumber.value}`,
    Password: `${password.value}`,
    full_name: `${fullName.value}`,
    email: `${email.value}`,
    gender: `${selectedGender.value}`,
    alternate_phoneNumber: `${alternatePhoneNumber.value}`,
  };
  // console.log(password.value,fullName.value,email.value,alternatePhoneNumber.value,contactNumberLocalStorage,selectedGender.value);
  const signUpResponse = await fetch(
    "https://api-vqd9.onrender.com/users/signup",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }
  );
  let res=await signUpResponse.json();
  if(res=="User already Registered!"){
    document.querySelector("#user-alreay-exist").style.display="block";
    document.querySelector("#text").innerText="User already existing";
    setTimeout(()=>{
      location="../index.html";
    },1000);
}
else{
  document.querySelector("#user-alreay-exist").style.display="block";
    document.querySelector("#text").innerText="Account created sucessfully";
    setTimeout(()=>{
      location="../index.html";
    },1000);
}
}