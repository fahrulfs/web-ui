// SHOW HUMBURGER MENU and SEARCHBOX
const navbarMenu = document.querySelector(".nav-menu");
const searchForm = document.querySelector(".search-form");
const searchBox = document.querySelector("#search-box");
const addtoCart = document.querySelector('.shopping-cart')
document.getElementById("menu-btn").onclick = x => {
  x.preventDefault();
  navbarMenu.classList.toggle("active");
};
document.getElementById("search-btn").onclick = (x) => {
    x.preventDefault(); 
    searchForm.classList.toggle("active");
  searchBox.focus();
};
document.getElementById("cart-btn").onclick = (x) => {
  x.preventDefault();
  addtoCart.classList.toggle("active");
};


// REMOVE HUMBERGER MENU and SEARCH
const humbMenu = document.querySelector("#menu-btn");
const searchBtn = document.querySelector("#search-btn");
const cartBtn = document.querySelector('#cart-btn')
document.addEventListener("click", function(x) {
  if (!humbMenu.contains(x.target) && !navbarMenu.contains(x.target)) {
    navbarMenu.classList.remove("active");
  }
  if (!searchBtn.contains(x.target) && !searchForm.contains(x.target)) {
    searchForm.classList.remove("active");
    }
    
if (!cartBtn.contains(x.target) && !addtoCart.contains(x.target)) {
    addtoCart.classList.remove("active");
  }
});


// MODAL BOX
const showModal = document.getElementById("modal-box");
const buttonModal = document.querySelectorAll(".modal-button");

buttonModal.forEach(button => {
  button.onclick = x => {
    x.preventDefault();
    showModal.style.display = "flex";
  };
});

document.getElementById("close-modal").onclick = x => {
  x.preventDefault();
  showModal.style.display = "none";
};
