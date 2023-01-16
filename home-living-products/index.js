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
let productArray = [];
addProduct.addEventListener("click", (e) => {
  let item = e.target.parentElement.children[0].src;
  let itemName = e.target.parentElement.children[1].innerText;
  let description = e.target.parentElement.children[2].innerText;
  let price = e.target.parentElement.children[4].firstElementChild.innerText;
  console.log(price);
  if (productArray.length == 0) {
    productArray.push({
      itemLink: item,
      itemName: itemName,
      description: description,
      price: price,
    });
    localStorage.setItem("productArray", JSON.stringify(productArray));
  } else {
    let flag = true;
    let a = localStorage.getItem("productArray");
    let productArrayy = JSON.parse(a);
    productArrayy.forEach((value, i) => {
      if (value.itemLink == item) {
        flag = false;
      }
    });
    if (flag) {
      productArray.push({
        itemLink: item,
        itemName: itemName,
        description: description,
        price: price,
      });
    }
    localStorage.setItem("productArray", JSON.stringify(productArray));
  }
});

//wishlist button event
addProduct.addEventListener("mouseover", (e) => {
  if (e.target.classList.contains("product")) {
    console.log(e.target.parentElement.childElement);
    e.target.childNodes[6].style.display = "block";
  }
});
addProduct.addEventListener("mouseout", (e) => {
  if (e.target.parentElement.children) {
    e.target.childNodes[6].style.display = "none";
  }
});
