const mobileButton = document.querySelector(".mobile-button");
const menuNav = document.querySelector(".main-nav")
const body= document.querySelector("body")
let beans = true;
const navLinks = document.querySelectorAll(".nav-link")
const hamburger = document.getElementById("hamburger");

mobileButton.addEventListener("click",()=>{

    beans = !beans
    menuNav.classList.toggle("opened")
    body.classList.toggle("choked")
    beans ? hamburger.src = "./images/Hamburger-open.svg" :hamburger.src = "./images/Hamburger-close.svg"
})


navLinks.forEach((link)=>{
    link.addEventListener("click",()=>{
        beans = !beans
        menuNav.classList.toggle("opened")
        body.classList.toggle("choked")
        beans ? hamburger.src = "./images/Hamburger-open.svg" :hamburger.src = "./images/Hamburger-close.svg"
    })
})