
// copyright year
const copyDate = document.querySelector("#date");
const date = new Date();
copyDate.innerHTML = date.getFullYear();

//navbar
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