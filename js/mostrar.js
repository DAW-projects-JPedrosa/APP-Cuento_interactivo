let comida = document.querySelectorAll(".comida");
let comidaDescripcion = document.querySelectorAll(".comida-descripcion");
let pensamiento = document.querySelectorAll(".bocadillo");

function accion(elem){
    elem.forEach((item) => {
        item.classList.toggle("ocultar"); 
    });
}

function mostrarTexto(index){
    comidaDescripcion[index].classList.toggle("ocultar");
}

for(let i=0; i<comida.length; i++){
    comida[i].addEventListener("mouseover", () => mostrarTexto(i));
    comida[i].addEventListener("mouseout", () => mostrarTexto(i));
}