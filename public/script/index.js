const buttonSearch = document.querySelector("#page-home main a") /* obs.: o queryselectall devolve uma lista de elemontos eo addevenlistener funciona apena no elemento e nao numa lista*/
const modal = document.querySelector("#modal")
const close = document.querySelector("#modal .header a")

buttonSearch.addEventListener("click", () => {
    modal.classList.remove("hide")
})

close.addEventListener("click", () => {
    modal.classList.add("hide")
})