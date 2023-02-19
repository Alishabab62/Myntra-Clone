let addProduct = document.getElementById("add-product");
let productDiv = "";
window.addEventListener("load", async () => {
  await fetch("https://myntraapi-5zfq.onrender.com/myntra/get/Home & Living")
    .then((data) => {
      return data.json();
    })
    .then((data2) => {
      for (let item of data2.products) {
        let product = document.createElement("div");
        product.classList = "product";
        product.innerHTML = ` <img src="${item.imageLink}" alt="">
      <div class="info-container">
        <div class="item-name">${item.brand}</div>
        <div class="description">${item.name}</div>
       <div class="add-to-wishlist-btn"><button id="wishlist-btn">WISHLIST</button></div>
      <div class="price">Rs.<span>${item.price}
      </span><span id="discount-price">${item.price * 2}
      </span><span id="discount-percentage">(50% OFF)</span></span></div>
  </div>`;
        addProduct.appendChild(product);
      }
    })
    .catch((error) => {
      console.log("Error:", error);
    });
});

addProduct = document.getElementById("add-product");
addProduct.addEventListener("click" , async (e) => {
  let item = e.target.parentElement.children[0].src;
  let brand = e.target.parentElement.children[1].children[0].innerText;
  let itemName = e.target.parentElement.children[1].children[1].innerText;
  let price =e.target.parentElement.children[1].children[3].children[0].innerText;
  console.log(item,brand,itemName,price);
  let userId=localStorage.getItem('number');
  const data = {
    "user":userId,
    "imageLink":`${item}`,
    "brand": `${brand}`,
    "productName": `${itemName}`,
    "price": Number(price)
  }
const response = await fetch('https://myntraapi-5zfq.onrender.com/myntra/addtobag', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify(data)
})
const res = await response.json();
console.log(res)
});


const loggedDiv=document.querySelector('.logged-div');
const userName = localStorage.getItem('userName');
const userNumber = localStorage.getItem('userNumber');
if(userName != null){
  loggedDiv.innerHTML = `<span>${userName}</span><br>
  <span>${userNumber}</span>`
  document.querySelector(".sign-up-div").style.display = "none";
  document.querySelector("#log-out").style.display = "block"
}
else{
  document.querySelector(".sign-up-div").style.display = "block";
}

const logOut = document.querySelector("#log-out");
logOut.addEventListener("click",()=>{
  localStorage.clear();
})