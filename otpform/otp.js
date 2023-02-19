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
// function to verify otp and also check that user is already have account or not

 const inputs = document.querySelectorAll("input");
// iterate over all inputs
inputs.forEach( async (input, index1) => {
  console.log(input)
  input.addEventListener("keyup", (e) => {
    const currentInput = input,
      nextInput = input.nextElementSibling,
      prevInput = input.previousElementSibling;
    if (currentInput.value.length > 1) {
      currentInput.value = "";
      return;
    }
    if (nextInput && nextInput.hasAttribute("disabled") && currentInput.value !== "") {
      nextInput.removeAttribute("disabled");
      nextInput.focus();
    }

    if (e.key === "Backspace") {
      inputs.forEach((input, index2) => {
        if (index1 <= index2 && prevInput) {
          input.setAttribute("disabled", true);
          input.value = "";
          prevInput.focus();
        }
      });
    }
    if (!inputs[3].disabled && inputs[3].value !== "") {
      
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
      } else 
      otpValidation();
    }
  });
});

//focus the first input which index is 0 on window load
window.addEventListener("load", () => inputs[0].focus());


async function  otpValidation(){
  let num = (localStorage.getItem("number"));
  {
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
    console.log(res.result)
    if ((res.result == null)) {
      localStorage.setItem('user' , false);
      localStorage.clear("userNumber");
      localStorage.clear("userName");
      wrong.innerText = "User not exists!! Create account";
      setTimeout(() => {
        location = "../signup_Page/index.html";
      }, 1000);
    } 
    else {
      localStorage.setItem('userNumber' , res.result.mobileNumber);
      localStorage.setItem('userName' , res.result.full_name);
      location = "../index.html";
    }
  }
}









// btn.addEventListener("click", async () => {
 
// });
