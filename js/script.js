//#1. Definir Variables

var boton = document.querySelector('.boton')
var navegador = document.querySelector('.navegador')

//#2. Crear Evento

boton.addEventListener('click', function(){
    navegador.classList.toggle('activo')
})