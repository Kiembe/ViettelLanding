const loader = document.querySelector('.loader')

window.addEventListener("load", () => {
    loader.classList.add('hidden')

    loader.addEventListener("transitionend", () => {
        document.body.removeChild(loader)
    })
})