const openMenu = document.querySelector('#menu')
const menu = document.querySelector('.mobileMenu')
const closeMenu = document.querySelector('.closeMenu')
const listMenu = document.querySelectorAll('.listMenu')

openMenu.onclick = () => {
    menu.classList.add('active')
}

closeMenu.onclick = () => {
    menu.classList.remove('active')
}

listMenu?.forEach((item) => {
    item.onclick = () => {
        menu.classList.remove('active')
    }
})