// ======================Go to Home Page================================================
const logo = document.querySelector(".logo");
logo.addEventListener("click", () => {
  location = "../index.html";
});

// =======================Add Address in new div Vineet=================================

// for saving new address

const add_btn = document.querySelector("#b3");
console.log(add_btn)
  add_btn.addEventListener("click" , ()=>{
    console.log("eveve");
    newAddressAdded()
  });
async function newAddressAdded(){
  const names = document.querySelector(".name");
  const phone = document.querySelector(".phones");
  const house = document.querySelector(".house");
  const town = document.querySelector(".town");
  const city = document.querySelector(".city");
  const state = document.querySelector(".state");
  const pin = document.querySelector(".pin");
  const addressType = document.getElementsByName("addressType");
  let finalAddressType;
  for(let i = 0 ;i<addressType.length ; i++){
    if(addressType[i].checked){
      finalAddressType = addressType[i].value;
    }
  }

  let data = {
    "name":`${names.value}`,
    "mobile_no":phone.value,
    "address_user":`${house.value}`,
    "locality":`${town.value}`,
    "city":`${city.value}`,
    "state":`${state.value}`,
    "pinCode":pin.value,
    "address_type":`${finalAddressType}`,
    "user_id":6396042652
  }
  const response = await fetch("https://myntraapi-5zfq.onrender.com/myntra/address",
  {
    method:"POST",
    headers:{
      "Content-Type" : "application/json",
    },
    body:JSON.stringify(data)
  });
  let finalResponse =await response.json();
  console.log(finalResponse);
}


// for getting address 

window.addEventListener("load" , forGettingAddress)
 
async function forGettingAddress(){
  const response = await fetch("https://myntraapi-5zfq.onrender.com/myntra/address/get/6396042652");
  
  let finalResponse = await response.json();

  if(finalResponse.result == []){
    document.querySelector(".details").style.display = "block";
    document.querySelector(".user-address-container").style.display = "none";
  }
  else{
    console.log("inside")
    document.querySelector(".details").style.display = "none";
    document.querySelector(".user-address-container").style.display = "block";
    console.log(finalResponse.result);
    const addressDiv = document.querySelector(".user-address-container");
    finalResponse.result.forEach((item)=>{
    const newDiv = document.createElement("div");
    newDiv.style.marginBottom = "20px"
    newDiv.style.boxShadow = "-1px -2px 9px 3px #dad4d494"
    newDiv.style.padding = "10px"
    newDiv.innerHTML = ` <div class="row row-1" data-id =${item._id}><input type="radio" id="radio" checked><p id = "_name">${item.name}</p><div class="address_type">${item.address_type}</div></div>
    <div class="row"><p id="_address">${item.locality}</p><span  id="_address" style="margin-left: 5px;">${item.address_user}</span></div>
    <div class="row"><p id="_address" style="margin-top: 0px;"> ${item.city} ${item.state} ${item.pinCode} </p></div>
    <div class="row"><p id ="_mobile">Mobile <span class="phone">: &nbsp; ${item.mobile_no}</span> </p></div>
    <div class="row"><p class="_delivery">• Pay on Delivery Available</p></div>
    <div class="row" style="margin-top: 16px;"><button id="removeBtn" data-id =${item._id}>REMOVE</button>
                                             <BUTTON style="margin-left: 16px;">EDIT</BUTTON>
    </div>`
    addressDiv.append(newDiv)
})
}
}


// for deleting address

const removeBtn = document.querySelector(".user-address-container");
console.log(removeBtn);
removeBtn.addEventListener("click", deletingAddress);

async function deletingAddress(e) {
  let id = e.target.getAttribute("data-id");
  console.log(id);
  try {
    const response = await fetch(
      `https://myntraapi-5zfq.onrender.com/myntra/address/delete/${id}`,
      {
        method: "DELETE",
      }
    );
    if(response.status !=200){
      throw new Error(`HTTP Error ${response.status}`)
    }
    let finalResponse = await response.json();
    if(finalResponse.message == "Deleted"){
      e.target.parentNode.remove();
    }
  } catch (error) {
    console.log(error);
  }
}












const details = document.querySelector(".details");
const address_div = document.querySelector(".add_added_div");
// const name_added = document.querySelector(".name_added");

// const phone_added = document.querySelector(".phone_added");

// const house_added = document.querySelector(".house_added");
// const town_added = document.querySelector(".town_added");
// const city_added = document.querySelector(".city_added");
// const state_added = document.querySelector(".state_added");
// const pin_added = document.querySelector(".pin_added");
// const addressconst = document.querySelector(".user-address-container");
// const namehere = document.querySelector("#_name");
// const addresshere = document.querySelector("#_address");
// const mobilehere = document.querySelector("#_mobile");
// const continuebtn = document.querySelector("#continuebtn");
// const upper = document.querySelector(".hide");

// add_btn.addEventListener("click", () => {
//   details.style.display = "none";
//   continuebtn.style.display = "block";
//   console.log(details);
//   // document.querySelector("..add-new-address").style.display="block";
//   // address_div.style.display = "block";
//   addressconst.style.display = "block";
//   console.log(names.value);
//   // name_added.innerText = names.value;
//   namehere.innerText = names.value;
//   // phone_added.innerText = phone.value;
//   mobilehere.innerText = `Mobile -${phone.value}`;
//   // house_added.innerText = house.value;
//   // town_added.innerText = town.value;
//   // city_added.innerText = city.value;
//   // state_added.innerText = state.value;
//   // pin_added.innerText = pin.value;
//   addresshere.innerText = `${house.value} ${town.value} ${city.value} ${state.value} - ${pin.value}`;
//   // console.log(add);
//   upper.style.display = "block";
// });

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

const userAddress = document.querySelector(".user-address-container");
window.addEventListener("load", () => {
  if (localStorage.getItem("addressDetails") == null) {
    userAddress.style.display = "none";
    totalDetails.style.display = "block";
  } else {
    button.addEventListener("click", (e) => {
      console.log(e.target.parentNode.parentNode.childNodes);
      const addressDetails = e.target.parentNode.parentNode.childNodes;
      let name = addressDetails[3].value;
      let mobileNo = addressDetails[5].value;
      let pinCode = addressDetails[9].value;
      let address = addressDetails[11].value;
      let locality = addressDetails[13].value;
      let city = addressDetails[15].value;
      let state = addressDetails[17].value;
      let allDetailsArray = [
        {
          name: name,
          mobileNo: mobileNo,
          pinCode: pinCode,
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
        userAddress.innerHTML = `<input type="radio"> <name>${name}</name>
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



window.addEventListener("load", () => {
  let date = new Date();
  const month = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  document.querySelector(
    ".delieveryTime"
  ).innerText = `Estimated delivery by ${date.getDate() + 4}  ${
    month[date.getMonth()]
  }  ${date.getFullYear()}`;
  console.log(date.getDate());
});
