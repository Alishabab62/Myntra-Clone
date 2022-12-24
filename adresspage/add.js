const logo = document.querySelector(".logo")

logo.addEventListener('click',(()=>{
    console.log("vineet")
    location = '../index.html'
}));


const totalMrp=document.querySelector("#side");
const totalAmount=document.querySelector('.side-total');
let totalBill=localStorage.getItem("totalMrp");
const totalProduct=document.querySelector("#total");
totalMrp.innerText=totalBill;
totalAmount.innerText=totalBill-580;
let total=localStorage.getItem("totalProduct");
console.log(total)
totalProduct.innerText=total;
