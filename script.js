let btnMenu = document.getElementById("btn-menu")
let menu = document.getElementById("menu-mobile")

btnMenu.addEventListener("click", () => {
  menu.classList.add("abrir-menu")
})

menu.addEventListener("click", () => {
  menu.classList.remove("abrir-menu")
})

function ativaLetra(elemento) {
  const arrTexto = elemento.innerHTML.split("")
  elemento.innerHTML = ""
  arrTexto.forEach((letra, i) => {
    setTimeout(() => {
      elemento.innerHTML += letra
    }, 75 * i)
  })
}

const titulo = document.querySelector(".digitando")

ativaLetra(titulo)
