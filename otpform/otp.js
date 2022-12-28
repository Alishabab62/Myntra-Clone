const number = document.getElementById("numbertosend");
window.onload = () => {
  let num = localStorage.getItem("number");
  number.innerText = `Sent to ${num}`;
};

const timer = document.getElementById("timer");
console.log(timer.innerText);
let time = 30;
function timerr() {
  if (time < 1) {
    timer.innerText = "Resend OTP";
    clearInterval(i);
  }
  timer.innerText = `Resend OTP in 00:${time--}`;
}
let i = setInterval(timerr, 1000);

// OTP Generating

let num1 = Math.floor(Math.random() * 10);
let num2 = Math.floor(Math.random() * 10);
let num3 = Math.floor(Math.random() * 10);
let num4 = Math.floor(Math.random() * 10);

const sentOTP = document.querySelector(".otp");
sentOTP.innerText = `${num1} ${num2} ${num3} ${num4} `;
console.log(sentOTP.innerText);

// validation for OTP

const otp1 = document.getElementById("otp1");
const otp2 = document.getElementById("otp2");
const otp3 = document.getElementById("otp3");
const otp4 = document.getElementById("otp4");

const wrong = document.getElementById("wrong");
const btn = document.getElementById("btn");

// function to verify otp and also check that user is already have account or not

btn.addEventListener("click", async () => {
  let num = (localStorage.getItem("number"));
  if (
    num1 != otp1.value ||
    num2 != otp2.value ||
    num3 != otp3.value ||
    num4 != otp4.value
  ) {
    wrong.innerText = "Wrong OTP";
    setTimeout(() => {
      wrong.innerText = "";
    }, 1000);
  } else {
    const data = {
      mobileNumber: num
    }
    console.log(data);
    const response = await fetch(
      `https://api-vqd9.onrender.com/users/login`,{
        method:"POST",
        headers:{
          "Content-Type": "application/json",
        },
        body:JSON.stringify(data)
      });
    let res = await response.json();
    if ((res == "User not exists!")) {
      wrong.innerText = "User not exists!! Create account";
      setTimeout(() => {
        location = "../signup_Page/index.html";
      }, 1000);
    } else {
      location = "../index.html";
    }
  }
});
