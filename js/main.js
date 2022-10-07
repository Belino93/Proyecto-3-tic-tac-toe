class Jugador {

    constructor(nombre, tipo){
        this.nombre = nombre,
        this.tipo = tipo
        this.turno = false
    }
    
    // Metodos

    jugarTurno(){

    };
    
}
// Creamos jugadores
let jugador1 = new Jugador('Abel', 'J1');
let jugador2 = new Jugador('Maquina', 'J2');

jugador1.turno = true;
console.log(jugador1.turno)



/*



*/

// Creamos tablero vacio
let tablero = [];
let fila1 = ['','',''];
let fila2 = ['','',''];
let fila3 = ['','',''];
tablero.push(fila1, fila2, fila3);

// Insertar una ficha

console.log(tablero);

const InsertarFicha = () => {
    if(jugador1.turno === true){
        let fila = parseInt(prompt('Indica la fila'));
        let columna = parseInt(prompt('Indica la columna'));
        if(tablero[fila - 1][columna - 1] == ""){
            tablero[fila - 1][columna -1] = 'X';
            jugador1.turno = false;
            jugador2.turno = true;
        }

    }else if(jugador2.turno === true){
        fila = parseInt(prompt('Indica la fila'));
        columna = parseInt(prompt('Indica la columna'));
        if(tablero[fila - 1][columna - 1] == ""){
            tablero[fila - 1][columna - 1] = 'O';
            jugador1.turno = true;
            jugador2.turno = false;
        }
    }
    console.log(tablero);
    ComprobarFilas();
}

const ComprobarFilas = () => {
    // Recorremos filas
    for(let x = 0; x < tablero.length; x++){
        if(tablero[x][0],tablero[x][2] === tablero[x][1] && tablero[x][0],tablero[x][1],tablero[x][2] !== ''){
            console.log('Has ganado!!')
        }
    }
}

