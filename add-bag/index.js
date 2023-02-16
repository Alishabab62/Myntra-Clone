const logo = document.querySelector(".logo");
logo.addEventListener("click", () => {
  location = "../index.html";
});

// ================================================
const totalAmount = document.querySelector("#total-amount");
const totalAmountDiscount = document.querySelector("#total-amount-discount");
const totalItem = document.querySelector("#total-item");
const mainBag = document.querySelector(".product-bag");
let price = 0;
let productObj;
let num = localStorage.getItem("number");
window.addEventListener("load", async () => {
  const response = await fetch( `https://myntraapi-5zfq.onrender.com/myntra/addtobag/get/${num}`
  );
  let b = await response.json(); 
   productObj = b.message; 
  productObj.forEach((product) => {
    mainBag.innerHTML += ` <div class="product">
        <div class="image"><img src="${product.imageLink}" alt=""></div>
        <div class="description">
            <div class="item-name">${product.brand}</div>
            <div class="item-description">${product.productName}</div>
            <div class="size">Size:
                <select name="size" id="quantity">
                    <option value="M">S</option>
                    <option value="M">M</option>
                    <option value="M">L</option>
                    <option value="M">XL</option>
                </select>
        </div>
            <div class="quantity">Qty:
                <select name="quantity" id="quantity">
                    <option value="M">1</option>
                    <option value="M">2</option>
                    <option value="M">3</option>
                    <option value="M">4</option>
                </select>
            </div>
           <div class="remove-box"><div class="price"><span>Rs.</span><span>${product.price}</span></div><button class="remove-btn" data-id=${product._id}>Remove</button></div>
        </div>
    </div>`;
    price += product.price;
  });
  totalAmount.innerText = price;
  totalItem.innerText = productObj.length;
  totalAmountDiscount.innerText = price;
});

// function to remove item

mainBag.addEventListener("click", async (e) => {
  if (e.target.classList.contains("remove-btn")) {
    e.target.parentNode.parentNode.parentNode.remove();
    let productId = e.target.getAttribute("data-id");
  let num = (localStorage.getItem("number"));
    let data = {
      user: num,
      product: `${productId}`,
    };
    const response = await fetch(
      "https://myntraapi-5zfq.onrender.com/myntra/addtobag/delete",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }
    );
  }
});



mainBag.addEventListener('click',(e)=>{
  if (e.target.classList.contains("remove-btn")){
    totalItem.innerText--;
    let amountAfterDelete=e.target.parentElement.children[0].lastElementChild.innerText;
    console.log(amountAfterDelete)
    totalAmount.innerText = totalAmount.innerText-amountAfterDelete;
    totalAmountDiscount.innerText = totalAmountDiscount.innerText-amountAfterDelete;
  }
})
const placeOrderBtn = document.querySelector(".place_order_btn");
placeOrderBtn.addEventListener("click", () => {
  if (totalItem.innerText != 0) {
    location = "../adresspage/index.html";
  } else {
    document.querySelector(".error-product").style.display = "block";
    setInterval(() => {
      document.querySelector(".error-product").style.display = "none";
    }, 1000);
  }
});
