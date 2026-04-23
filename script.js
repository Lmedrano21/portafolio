function Desplegar() {

    var menu = document.getElementsByClassName("links")//Variable para traer el menu del html(en este caso se llama links)
    var boton = document.getElementsByClassName("menu-btn")//Variable para traer el boton del html(en este caso se llama boton-menu)
    //Condicional necesario para 
    if (menu[0].classList.contains("active")) {
        boton[0].innerText = "≡";
    }
    else {
        boton[0].innerText = "X";
    }
    menu[0].classList.toggle("active")
}