//Recogemos objetos jugadores
let jugador1 = JSON.parse(sessionStorage.getItem('datosP1'));
let jugador2 = JSON.parse(sessionStorage.getItem('datosP2'));
document.getElementById('text-screen').innerHTML = `Turno de ${jugador1.nombre}`;

// Creamos tablero vacio
let tablero = [];
let fila1 = ['', '', ''];
let fila2 = ['', '', ''];
let fila3 = ['', '', ''];
tablero.push(fila1, fila2, fila3);


// Insertar una ficha
//Recogemos celdas, para crear evento y pintamos en la pantalla
let celdas = Array.from(document.getElementsByClassName('game-row'))
celdas.map((celda) => {
    celda.addEventListener('click', () => {
        // Jugador 1
        if (jugador1.turno === true && celda.innerHTML == '' && (jugador1.nfichas > 0)) {
            celda.innerHTML = jugador1.ficha
            jugador1.turno = false;
            jugador2.turno = true;
            document.getElementById('text-screen').innerHTML = `Turno de ${jugador2.nombre}`;
            jugador1.nfichas --;
        }
        // Jugador 2
        if (jugador2.turno === true && celda.innerHTML == '' && (jugador2.nfichas > 0)) {
            celda.innerHTML = jugador2.ficha
            jugador1.turno = true;
            jugador2.turno = false;
            document.getElementById('text-screen').innerHTML = `Turno de ${jugador1.nombre}`;
            jugador2.nfichas --;
        }
    })
})
// Insertar una ficha
//Recogemos celdas, para crear evento y pintamos en el array
const InsertarFicha = (fila, columna) => {
    if ((jugador1.turno === true) && (jugador1.nfichas > 0) && (tablero[fila][columna] == "")) {
        tablero[fila][columna] = 'X';
    }
    if ((jugador2.turno === true) && (jugador2.nfichas > 0) && (tablero[fila][columna] == "")) {
        tablero[fila][columna] = 'O';
    }
    console.log(tablero);
    ComprobarFilas();
    ComprobarColumna();
    ComprobarDiagonal();
}

const ComprobarFilas = () => {
    // Recorremos filas
    for (let x = 0; x < tablero.length; x++) {
        if (((tablero[x][0] === tablero[x][2]) && (tablero[x][2] == tablero[x][1])) &&
            (tablero[x][0] !== '') && (tablero[x][1] !== '') && (tablero[x][2] !== '')) {
            if (jugador1.ficha === tablero[x][0]) {
                console.log(`Ha ganado el ${jugador1.tipo}!!`);
                //return
            } else {
                console.log(`Ha ganado el ${jugador2.tipo}!!`);
            }
        }
    }
}

const ComprobarColumna = () => {
    //Recorremos columnas
    for (let y = 0; y < tablero.length; y++) {
        if (((tablero[0][y] === tablero[1][y]) && (tablero[1][y] == tablero[2][y])) &&
            ((tablero[0][y] !== '') && (tablero[1][y] !== '') && (tablero[2][y] !== ''))) {
            if (jugador1.ficha === tablero[y][0]) {
                console.log(`Ha ganado el ${jugador1.tipo}!!`);
                //return
            } else {
                console.log(`Ha ganado el ${jugador2.tipo}!!`);
            }
        }
    }
}

const ComprobarDiagonal = () => {
    if (((tablero[0][0] === tablero[1][1]) && (tablero[1][1] === tablero[2][2])) &&
        ((tablero[0][0] !== '') && (tablero[1][1] !== '') && (tablero[2][2] !== ''))) {
        if (jugador1.ficha === tablero[1][1]) {
            console.log(`Ha ganado el ${jugador1.tipo}!!`);
            //return
        } else {
            console.log(`Ha ganado el ${jugador2.tipo}!!`);
        }
    }
    if (((tablero[0][2] === tablero[1][1]) && (tablero[1][1] === tablero[2][0])) &&
        ((tablero[0][2] !== '') && (tablero[1][1] !== '') && (tablero[2][0] !== ''))) {
        if (jugador1.ficha === tablero[1][1]) {
            console.log(`Ha ganado el ${jugador1.tipo}!!`);
            //return
        } else {
            console.log(`Ha ganado el ${jugador2.tipo}!!`);
        }
    }
}
