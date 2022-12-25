const logo = document.querySelector(".logo")

logo.addEventListener('click',(()=>{
    console.log("vineet")
    location = '../index.html'
}));

<<<<<<< HEAD

const totalMrp=document.querySelector("#side"); 
const totalAmount=document.querySelector('.side-total'); 
=======
const totalMrp=document.querySelector("#side");
const totalAmount=document.querySelector('.side-total');
>>>>>>> a1444d1ad1afa35a31c5268e747274cb7cde05d5
const discount=document.querySelector("#colorc");
let totalBill=localStorage.getItem("totalMrp");
const totalProduct=document.querySelector("#total");
let discountPrice=Math.floor((totalBill*40)/100);
discount.innerText=discountPrice;
totalMrp.innerText=totalBill;
totalAmount.innerText=totalBill-discountPrice;
let total=localStorage.getItem("totalProduct");
totalProduct.innerText=total;
//addresscode
const totalDetails = document.querySelector(".details");
const button = document.querySelector("#b3")


button.addEventListener( "click", ((e)=>{
    console.log(e.target.parentNode.parentNode.childNodes);
    const addressDetails = e.target.parentNode.parentNode.childNodes
    let name=addressDetails[3].value;
    let mobileNo=addressDetails[5].value;
    let pincode = addressDetails[9].value;
    let address = addressDetails[11].value;
    let locality = addressDetails[13].value;
    let city = addressDetails[15].value;
    let state = addressDetails[17].value;
    console.log(name,mobileNo,pincode,address,locality,city,state);
    let allDetailsArray = [{
        "name": name,
        "mobileNo" : mobileNo,
        "pincode":pincode,
        "address":address,
        "locality":locality,
        "city":city,
        "state":state
    }]
    localStorage.setItem("addressDetails",JSON.stringify(allDetailsArray))
    totalDetails.style.display="none";



}));
// 359,11,13,15,17