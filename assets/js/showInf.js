const actButton = document.querySelectorAll('.infBtn')
const proInfBoard = document.querySelectorAll('.proInfBoard')
const closeInfBoard = document.querySelectorAll('h5 .bx-chevron-down')



actButton?.forEach((item, index) => {
    item.addEventListener("click", function() {
        proInfBoard[index].setAttribute("style","display:block;")
        setTimeout(() => {
            proInfBoard[index].classList.add('active')
        },50)
    });
});

closeInfBoard?.forEach((item, index) => {
    item.addEventListener("click", function() {
        proInfBoard[index].classList.remove('active')
        setTimeout(() => {
        proInfBoard[index].setAttribute("style","display:none;")
        },1000)
    });
});
