
// copyright year
const copyDate = document.querySelector("#date");
const date = new Date();
copyDate.innerHTML = date.getFullYear();

//navbar reponsible setup
const btn = document.querySelector(".nav-btn");
const navLinks = document.querySelector(".nav-links");
console.log(btn);
console.log(navLinks);

btn.addEventListener("click",function(){

    let value = navLinks.classList.contains("show");
    if(value){
        navLinks.classList.remove("show");
        btn.classList.remove("change");
    }else{
        navLinks.classList.add("show");
        btn.classList.add("change");
    }
});

// ***********************fixed navbar*******************
const navbar = document.querySelector(".header");
// add event listener to browser window

window.addEventListener("scroll",() =>{

 if(window.pageYOffset > 92){
     navbar.classList.add("fixed");
 }
 else{
    navbar.classList.remove("fixed");
 }
});


// ***********************scrollLinks*******************
const scrollLinks = document.querySelectorAll(".scroll-link");

scrollLinks.forEach(link =>{
    link.addEventListener("click", e =>{
        e.preventDefault();
        navLinks.classList.remove("show");
        btn.classList.remove("change");
        const id = e.target.getAttribute("href").slice(1);
        const elment = document.getElementById(id);

        // window scrollTo
        window.scrollTo({
            left:0;
            top:element.offsetTop,
            behavior:"smooth"

        });
    });
});