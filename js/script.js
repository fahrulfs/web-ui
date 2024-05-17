// SHOW HUMBURGER MENU
const navbarMenu = document.querySelector
    ('.nav-menu')
document.getElementById('menu').onclick = (x) => {
    x.preventDefault();
    navbarMenu.classList.toggle('active')
}


// REMOVE HUMBERGER MENU
const humbMenu = document.querySelector('#menu')
document.addEventListener('click', function (x) {
    if (!humbMenu.contains(x.target) && !navbarMenu.contains(x.target)) {
        navbarMenu.classList.remove('active')
    }
})

// MODAL BOX 
const showModal = document.getElementById('modal-box')
const buttonModal = document.querySelectorAll('.modal-button')

buttonModal.forEach((button) => {

    button.onclick = (x) => {
        x.preventDefault()
        showModal.style.display = 'flex'
}
})

document.getElementById('close-modal').onclick
    = (x) => {
        x.preventDefault()
        showModal.style.display = 'none'
    }




