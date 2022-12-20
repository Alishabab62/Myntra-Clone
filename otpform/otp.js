const number=document.getElementById('numbertosend')
window.onload =()=>{
 let num=   localStorage.getItem('number');
//  console.log(num);
number.innerText=`Sent to ${num}`
}