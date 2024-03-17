//alert("hola este es mi javascript");
//let nombre = "karol";
//nombre = "Deisy";
//var nombre1 = "Karol";
//nombre1 = "carril";
//const nombre2 = "karol";
//nombre2 = "valdivia;"
//console.log(nombre);
//console.log(nombre1);
//console.log(nombre2);

//SELECCIONADOR ELEMENTOS

let contenidoTitulo = "GROWING"
let titulo = document.querySelector(".fa-solid.fa-seedling");
console.log(titulo); 

titulo.innerHTML = contenidoTitulo;
//con una variable podríamos cambiar el contenido de la web sin necesidad de usar HTML.

//CONDICIONALES
let textoTitulo = titulo.innerText;
console.log(textoTitulo);

if(textoTitulo == "HOLIS"){titulo.innerHTML = "OTRO";}
else {console.log("no se cumple");}

//FUNCIONES

let nombre = "Karol Carril";
let gusto = "la repostería";
let acciones = " en chocolatería";

let parrafo = document.querySelector(".parrafo1");

function cambiarTexto(nombre, gusto, acciones){
    let contenido = `Bienvenido a este espacio donde juntos lograremos tu mejor versión. Hola, mi nombre es ${nombre} y soy profesora de Desarrollo Personal y me fascina ${gusto}. En este espacio desarrollaremos actividades dinámicas e interactivas para desarrollar tus habilidades ${acciones}.`;

    return contenido;
}

parrafo.innerText = cambiarTexto(nombre, gusto, acciones);

