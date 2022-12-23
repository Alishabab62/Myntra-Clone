const mainBag=document.querySelector('.product-bag');

let product="";
window.addEventListener('load',()=>{
    let itemImage=localStorage.getItem("itemLink");
    let itemName=localStorage.getItem('itemName');
    let itemDescription=localStorage.getItem("itemDescription");
    let itemPrice=localStorage.getItem("itemPrice");
    mainBag.innerHTML+=` <div class="product">
    <div class="image"><img src="${itemImage}" alt=""></div>
    <div class="description">
        <div class="item-name">${itemName}</div>
        <div class="item-description">${itemDescription}</div>
        <div class="size">Size:
            <select name="size" id="size">
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
        <div class="price">${itemPrice}</div>
    </div>
</div>`
})
