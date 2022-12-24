
const logo = document.querySelector(".logo")

logo.addEventListener('click',(()=>{
    console.log("vineet")
    location = '../index.html'
}))

// ================================================

const mainBag=document.querySelector('.product-bag');
const totalAmount=document.querySelector('#total-amount');
const totalAmountDiscount=document.querySelector('#total-amount-discount');
const totalItem=document.querySelector('#total-item');
window.addEventListener('load',()=>{
    let a=localStorage.getItem("productArray");
    let productObj=(JSON.parse(a));
    productObj.forEach((product)=>{
        mainBag.innerHTML+=` <div class="product">
        <div class="image"><img src="${product.itemLink}" alt=""></div>
        <div class="description">
            <div class="item-name">${product.itemName}</div>
            <div class="item-description">${product.description}</div>
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
           <div class="remove-box"><div class="price">Rs.${product.price}</div><button class="remove-btn">Remove</button></div>
        </div>
    </div>`
    })
    let price=0;
    productObj.forEach((product)=>{
        let p=Number(product.price);
        price += p;
    });
    // console.log(price);
    totalAmount.innerText=price;               //totalAmount
    totalAmountDiscount.innerText=price;      //totalAmountDiscount
    totalItem.innerText=productObj.length;      //totalItem
    localStorage.setItem("totalMrp",price);
    localStorage.setItem("totalProduct",productObj.length);   
});

// function to remove item

mainBag.addEventListener('click',(e)=>{
        if(e.target.classList.contains('remove-btn')){
            console.log(e);
            e.target.parentNode.parentNode.parentNode.remove();
        }
})


