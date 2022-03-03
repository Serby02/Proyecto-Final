var puntos = 0;
var numero = 0;
var palabraB = '';
var listapal = ['ojete','coger','fumar','tomar','tirar'];
var palabra = '';
/*COMPROBAR LETRA Y COLOREARLA*/
function comprobar(){
    for (i = 0; i < 5; i++) {
        //RECORRER POSICIONES
        for (j = 0; j < 5; j++) {
            console.log(palabraB[j] + ' - ' + palabra[i]);
            if (palabra.charAt(i) == palabraB.charAt(j)) {
                console.log('Dentro del primer if');
                if (i == j) {
                    inputs.eq(i).css('background-color', '#198754');
                    puntos = puntos + 5;
                    $('#score').text(puntos);
                    break; //SALIR DEL BUCLE
                }
                else {
                    //SIGUIENTE POSICION
                    inputs.eq(i).css('background-color', '#ffc107');
                }
            }
        }
    }
}

//---------------------------------------------------------------------------------------------------------

//COLOREAR CASILLA
function colorear(){
    for(i=0;i<5;i++){
        for(j=0;j<5;j++){
            if(palabra[i] == palabraB[j]){

            }
        }
    }
}

//---------------------------------------------------------------------------------------------------------

function capturarPalabra(){
    inputs = $('#word' + numero).children();
    //ALMACENAR PALABRAS
    palabra = [];

    for (i = 0; i < 5; i++) {
        palabra = palabra + inputs.eq(i).val();
    }
    console.log(palabra);
}

function haGanado(){
    if(palabra == palabraB){
        puntos = puntos + 1000000;
        $('#score').text(puntos);
        return true;
        
    } 
    else return false;
}

//---------------------------------------------------------------------------------------------------------

//OCULTAR CASILLAS
function ocultar() {
    for(let i=1;i<6;i++){
        $('#word' + i).css('display','none');
    }
}

//---------------------------------------------------------------------------------------------------------

//MOSTRAR SIGUIENTE LÍNEA
function mostrar(boton){
    $('#word' + numero).children().prop('disabled', true);
    numero++;
    $('#word' + numero).css('display','block');

}

//---------------------------------------------------------------------------------------------------------

//PALABRA RANDOM
function palabrarandom(){
    palabraB = listapal[ Math.floor( Math.random() * listapal.length) ];
    console.log(palabraB);
}
