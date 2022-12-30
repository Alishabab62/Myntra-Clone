// ======================Go to Home Page================================================
const logo = document.querySelector(".logo");

logo.addEventListener("click", () => {
  console.log("vineet");
  location = "../index.html";
});

// =======================Add Address in new div Vineet=================================

const add_btn = document.querySelector("#b3");

const details = document.querySelector(".details");
const address_div = document.querySelector(".add_added_div");

const names = document.querySelector(".name");
const name_added = document.querySelector(".name_added");

const phone = document.querySelector(".phones");
const phone_added = document.querySelector(".phone_added");

const house = document.querySelector(".house");
const town = document.querySelector(".town");
const city = document.querySelector(".city");
const state = document.querySelector(".state");
const pin = document.querySelector(".pin");
const house_added = document.querySelector(".house_added");
const town_added = document.querySelector(".town_added");
const city_added = document.querySelector(".city_added");
const state_added = document.querySelector(".state_added");
const pin_added = document.querySelector(".pin_added");
const addressconst = document.querySelector(".user-address-container");
const namehere = document.querySelector("#_name");
const addresshere = document.querySelector("#_address");
const mobilehere = document.querySelector("#_mobile");
const continuebtn = document.querySelector("#continuebtn");
const upper = document.querySelector(".hide");

add_btn.addEventListener("click", () => {
  details.style.display = "none";
  continuebtn.style.display = "block";
  console.log(details);
  // document.querySelector("..add-new-address").style.display="block";
  // address_div.style.display = "block";
  addressconst.style.display = "block";
  console.log(names.value);
  // name_added.innerText = names.value;
  namehere.innerText = names.value;
  // phone_added.innerText = phone.value;
  mobilehere.innerText = `Mobile -${phone.value}`;
  // house_added.innerText = house.value;
  // town_added.innerText = town.value;
  // city_added.innerText = city.value;
  // state_added.innerText = state.value;
  // pin_added.innerText = pin.value;
  addresshere.innerText = `${house.value} ${town.value} ${city.value} ${state.value} - ${pin.value}`;
  // console.log(add);
  upper.style.display = "block";
});

const newaddress = document.querySelector(".add-new-address");
// ============Go back Address Page======================

// const back = document.querySelector(".go_back");

// back.addEventListener("click", () => {
//   // location = 'index.html'
//   details.style.display = "block";
//   address_div.style.display = "none";
//   newaddress.style.display = "block";

//   // console.log('back')
// });

// ================================================= End ===================================================

const totalMrp = document.querySelector("#side");
const totalAmount = document.querySelector(".side-total");
const discount = document.querySelector("#colorc");
let totalBill = localStorage.getItem("totalMrp");
const totalProduct = document.querySelector("#total");
let discountPrice = Math.floor((totalBill * 40) / 100);
discount.innerText = discountPrice;
totalMrp.innerText = totalBill;
totalAmount.innerText = totalBill - discountPrice;
let total = localStorage.getItem("totalProduct");
totalProduct.innerText = total;
//addresscode
const totalDetails = document.querySelector(".details");
const button = document.querySelector("#b3");

const userAddres = document.querySelector(".user-address-container");
window.addEventListener("load", () => {
  if (localStorage.getItem("addressDetails") == null) {
    userAddres.style.display = "none";
    totalDetails.style.display = "block";
  } else {
    button.addEventListener("click", (e) => {
      console.log(e.target.parentNode.parentNode.childNodes);
      const addressDetails = e.target.parentNode.parentNode.childNodes;
      let name = addressDetails[3].value;
      let mobileNo = addressDetails[5].value;
      let pincode = addressDetails[9].value;
      let address = addressDetails[11].value;
      let locality = addressDetails[13].value;
      let city = addressDetails[15].value;
      let state = addressDetails[17].value;
      let allDetailsArray = [
        {
          name: name,
          mobileNo: mobileNo,
          pincode: pincode,
          address: address,
          locality: locality,
          city: city,
          state: state,
        },
      ];
      if (localStorage.getItem("addressDetails") == null) {
        console.log("Hello");
      } else {
        localStorage.setItem("addressDetails", JSON.stringify(allDetailsArray));
        userAddres.innerHTML = `<input type="radio"> <name>${name}</name>
                <div class="address"> <p>${locality} </p><p>${address}</p><p>${city},</p><p>${state}-</p><p>${pincode}</p></div>
                <p>Mobile <span>${mobileNo}</span></p>
                <p>Pay on delivery</p>
                <button>Remove</button>
                <button>Edit</button>`;
      }
    });
  }
});

window.addEventListener("load", () => {
  const totalMRP = localStorage.getItem("totalMrp");
  document.querySelector("#side").innerText = totalMRP;
  let discountedPrice = Math.floor((totalMRP * 40) / 100);
  document.querySelector("#colorc").innerText = `-${discountedPrice}`;
  let updatedPrice = totalMRP - discountedPrice;
  document.querySelector(".side-total").innerText = updatedPrice;
  let totalProduct = localStorage.getItem("totalProduct");
  document.querySelector("#total").innerText = totalProduct;
});

window.addEventListener('load',()=>{
  let date=new Date();
  const month = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
  document.querySelector('.delieveryTime').innerText=`Estimated delivery by ${date.getDate()}  ${month[date.getMonth()]}  ${date.getFullYear()}`;
  console.log(date.getDate());
})