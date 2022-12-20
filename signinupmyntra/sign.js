const numberforotp = document.getElementById("number")
const btn=document.querySelector('.button')

btn.addEventListener('click',()=>{
    localStorage.setItem("number" ,`${numberforotp.value}`);
    location='../otpform/index.html'
})

const timer=document.querySelector('.text2');
console.log(timer.innerText)
let time=30;
function time1(){
    timer.innerText=`Resend OTP in ${time--}`;
    console.log("he")
}
//timer
setTimeout(time1,1000)