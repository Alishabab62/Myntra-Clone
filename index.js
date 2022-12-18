let loading=true;
fetch('https://fakestoreapi.com/products').then((data)=>{
    return data.json();
}).then((data2)=>{
    console.log(data2);
}).catch((e)=>{
    console.log(e);
}).finally(()=>{
    loading=false;
    console.log("Done");
});


// ===========================vineet===========================

// ==============================For Laptop view========================

const header_men = document.querySelector(".header_men");
const header_women = document.querySelector(".header_women");
const header_kids = document.querySelector(".header_kids");

const men = document.querySelector(".men");
const women = document.querySelector(".women");
const kids = document.querySelector(".kids");

function openSubmenuMen(){
    console.log("vineet");
    console.log(men)
    if(men.style.display !=="flex"){
        men.style.display = "flex"
    }else{
        men.style.display = "none";
    }
    // men.style.display= "block";

}
// function ab(){
//     men.style.display="none";
// }
function openSubmenuWomen() {
    console.log(women)
    if(women.style.display !=="flex"){
        women.style.display = "flex"
    }else{
        women.style.display = "none";
    }
}
function openSubmenuKids(){
    if(kids.style.display !=="flex"){
        kids.style.display = "flex"
    }else{
        kids.style.display = "none";
    }
}

header_men.addEventListener('mouseover', openSubmenuMen);
header_men.addEventListener('mouseout', ab);
header_women.addEventListener('click', openSubmenuWomen);
header_kids.addEventListener('click', openSubmenuKids);


// ===========================For Tab and Mobile view=================

const burgerIcon = document.querySelector("#burgerIcon");
const sidebar = document.querySelector(".sidebarMenu")

function openSideBar(){
    // console.log("vineet");
    // sidebar.style.display="block"
    if(sidebar.style.display !=="block"){
        sidebar.style.display = "block"
    }else{
        sidebar.style.display = "none";
    }
}


burgerIcon.addEventListener('click', openSideBar);