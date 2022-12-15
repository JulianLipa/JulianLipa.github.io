/*Variables modal*/
var modal = document.getElementById("modal");
var buttonModal = document.getElementById("cerrarModal");

/*Variables carrousel*/
var par = 0;
var posicionCarrousel = Math.floor(Math.random() * 3) + 1;

var imagenes = ["1.png",
                "2.png",
                "3.png"];

while(par == 0){
    document.getElementById("imagen").src = "assets/images/carrousel/"+imagenes[posicionCarrousel-1];
    document.getElementById("paginador").innerHTML = posicionCarrousel+"/3";

    par = 1;
    console.log("hoa");
}

var cantImagenes = 3;

/*Codigo temporizador*/
var segundos = 60;
var minutos = 19;

var tiempo;
var pausa = 1;

tiempo = setInterval(temporizador, 1000);

function temporizador(){


    $( "#reiniciarTiempo").on( "click", function() {
        segundos = 60;
        minutos = 19;
        document.getElementById("timer").innerHTML = "20:00";
    });

    $( "#pausarTiempo").on( "click", function() {
        if(pausa == 1){
            pausa = 0;
            clearInterval(tiempo);
            document.getElementById("pausaImg").src = "assets/images/reaundar.png";
        }else{
            pausa = 1;
            clearInterval(tiempo);
            tiempo = setInterval(temporizador, 1000);
            document.getElementById("pausaImg").src = "assets/images/pausa.png";
        }
    });

    if(segundos>0){
        segundos--;
    }else{
        minutos--;
        segundos = 59;
    }

    if(minutos == 0){
        segundos = 60;
        minutos = 19;
        document.getElementById("timer").innerHTML = "20:00";
    }

    if(segundos<10){
        document.getElementById("timer").innerHTML = minutos+":0"+segundos;
    }else{
        document.getElementById("timer").innerHTML = minutos+":"+segundos;
    }
}


/*Codigo modal*/

setTimeout(() => {

    modal.style.display = "block";
    
    buttonModal.onclick = function(){
        modal.style.display = "none";
    }
    
    document.addEventListener('keydown', (event) => {
        if(event.key == "Enter" || event.key == "Escape"){
            modal.style.display = "none";
        }
      }, false);
  }, 5000)


/*Codigo carrousel*/
document.getElementById("retroceder").addEventListener("click", retrocederFoto);
document.getElementById("avanzar").addEventListener("click", avanzarFoto);

function retrocederFoto(){
    if(posicionCarrousel <= 1){
        posicionCarrousel = cantImagenes;
    }else{
        posicionCarrousel--;
    }
    mostrarImagen();
}

function avanzarFoto(){
    if(posicionCarrousel >= cantImagenes){
        posicionCarrousel = 1;
    }else{
        posicionCarrousel++;
    }
    mostrarImagen();
}

function mostrarImagen(){
    document.getElementById("imagen").src = "assets/images/carrousel/"+imagenes[posicionCarrousel-1];
    document.getElementById("paginador").innerHTML = posicionCarrousel+"/3";
}