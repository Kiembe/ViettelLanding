const acodiants = document.querySelectorAll('.acodiant')

acodiants?.forEach((item) => {
    item.addEventListener("click",handleAcodiant)
})

function handleAcodiant() {
    this.classList.toggle('active')
    const isActive = this.classList.contains('active')
    const innerContent = this.querySelector('.acodiantInner')
    this.querySelector('.acodiantContent').setAttribute("style",`height: ${isActive ? innerContent.clientHeight : 0}px`)
}