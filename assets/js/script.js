const hamburger = document.getElementById("hamburger");
const navUL = document.getElementById("item");

hamburger.addEventListener("click",()=>{
    navUL.classList.toggle("show");
});