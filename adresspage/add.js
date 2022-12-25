const logo = document.querySelector(".logo")

logo.addEventListener('click',(()=>{
    console.log("vineet")
    location = '../index.html'
}));


const totalMrp=document.querySelector("#side");
const totalAmount=document.querySelector('.side-total');
const discount=document.querySelector("#colorc");
let totalBill=localStorage.getItem("totalMrp");
const totalProduct=document.querySelector("#total");
let discountPrice=Math.floor((totalBill*40)/100);
discount.innerText=discountPrice;
totalMrp.innerText=totalBill;
totalAmount.innerText=totalBill-discountPrice;
let total=localStorage.getItem("totalProduct");
totalProduct.innerText=total;
