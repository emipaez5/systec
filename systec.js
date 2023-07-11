const menu = document.querySelector(".nav-menu")
const abrir = document.querySelector(".nav-menu-hamburguesa")
const cerrar = document.querySelector(".cerrar")
abrir.addEventListener("click", function(){
    menu.classList.add("visible")
})
cerrar.addEventListener("click", function(){
    menu.classList.remove("visible")
})