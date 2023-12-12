const menuBtn = document.querySelector('.menu-btn');
const sideNavbar=document.querySelector('.sideNavbar');

menuBtn.addEventListener("click",()=>{
sideNavbar.classList.toggle("active");
});
