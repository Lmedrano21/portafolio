/**
 * Función para desplegar/contraer el menú de navegación móvil
 * Alterna entre mostrar (icono X) y ocultar (icono ≡) el menú
 */
function Desplegar() {
    // Obtiene todos los elementos con la clase "links" (el menú de navegación)
    var menu = document.getElementsByClassName("links");
    
    // Obtiene todos los elementos con la clase "menu-btn" (el botón hamburguesa)
    var boton = document.getElementsByClassName("menu-btn");
    
    // Verifica si el menú ya tiene la clase "active" (está abierto)
    if (menu[0].classList.contains("active")) {
        // Si el menú está abierto, cambia el ícono del botón a "≡" (hamburguesa)
        boton[0].innerText = "≡";
    }
    else {
        // Si el menú está cerrado, cambia el ícono del botón a "X" (cerrar)
        boton[0].innerText = "X";
    }
    
    // Alterna la clase "active" en el menú (la agrega si no la tiene, la quita si la tiene)
    menu[0].classList.toggle("active");
}