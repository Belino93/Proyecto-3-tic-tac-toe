//Recogemos objetos jugadores
let jugador1 = JSON.parse(sessionStorage.getItem('datosP1'));
let jugador2 = JSON.parse(sessionStorage.getItem('datosP2'));
let cpu = '';
document.getElementById('text-screen').innerHTML = `Turno de ${jugador1.nombre}`;

// Creamos tablero vacio
let tablero = [];
let fila1 = ['', '', ''];
let fila2 = ['', '', ''];
let fila3 = ['', '', ''];
tablero.push(fila1, fila2, fila3);
let turnos = 0

if(jugador1.tipo == 'CPU1'){
    cpu = jugador1
}else if (jugador2.tipo == 'CPU2') {
    cpu = jugador2
}

// Insertar una ficha
//Recogemos celdas, para crear evento y pintamos en la pantalla
let celdas = Array.from(document.getElementsByClassName('game-row'))
celdas.map((celda) => {
    celda.addEventListener('click', () => {
        // Jugador 1
        if (jugador1.turno === true && celda.innerHTML == '' && jugador1.nfichas > 0) {
            celda.innerHTML = jugador1.ficha
            jugador1.turno = false;
            jugador2.turno = true;
            document.getElementById('text-screen').innerHTML = `Turno de ${jugador2.nombre}`;
            jugador1.nfichas --;
            turnos ++
        }else if(jugador1.turno === true && jugador1.nfichas == 0 && celda.innerHTML == 'X' && celda.innerHTML != 'O'){
            celda.innerHTML = '';
            jugador1.nfichas ++;
        }
        // Jugador 2
        if (jugador2.turno === true && celda.innerHTML == '' && jugador2.nfichas > 0) {
            celda.innerHTML = jugador2.ficha
            jugador1.turno = true;
            jugador2.turno = false;
            document.getElementById('text-screen').innerHTML = `Turno de ${jugador1.nombre}`;
            jugador2.nfichas --;
            turnos ++
        }else if(jugador2.turno === true && jugador2.nfichas == 0 && celda.innerHTML == 'O' && celda.innerHTML != 'X'){
            celda.innerHTML = '';
            jugador2.nfichas ++;
        }
    })
})
// Insertar una ficha
//Recogemos celdas, para crear evento y pintamos en el array
const InsertarFicha = (fila, columna) => {
    if ((jugador1.turno === true) && (jugador1.nfichas > 0) && (tablero[fila][columna] == "")) {
        tablero[fila][columna] = 'X';

    }else if(jugador1.turno === true && jugador1.nfichas == 0 && tablero[fila][columna] == "X" && tablero[fila][columna] != 'O'){
        tablero[fila][columna] = '';
    }

    if ((jugador2.turno === true) && (jugador2.nfichas > 0) && (tablero[fila][columna] == "")) {
        tablero[fila][columna] = 'O';

    }else if(jugador2.turno === true && jugador2.nfichas == 0 && tablero[fila][columna] == "O" && tablero[fila][columna] != 'X'){
        tablero[fila][columna] = '';
    }

    console.log(tablero);
    ComprobarFilas();
    ComprobarColumna();
    ComprobarDiagonal();
    // CONDICIONAL CPU
    
}

const ComprobarFilas = () => {
    // Recorremos filas
    for (let x = 0; x < tablero.length; x++) {
        if (((tablero[x][0] === tablero[x][2]) && (tablero[x][2] == tablero[x][1])) &&
            (tablero[x][0] !== '') && (tablero[x][1] !== '') && (tablero[x][2] !== '')) {
            if (jugador1.ficha === tablero[x][0]) {
                console.log(`Ha ganado el ${jugador1.tipo}!!`);
                sessionStorage.setItem('winner', JSON.stringify(jugador1))
                return window.location.href = '../pages/winner.html'
            } else {
                console.log(`Ha ganado el ${jugador2.tipo}!!`);
                sessionStorage.setItem('winner', JSON.stringify(jugador2))
                return window.location.href = '../pages/winner.html'
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
                sessionStorage.setItem('winner', JSON.stringify(jugador1))
                return window.location.href = '../pages/winner.html'
            } else {
                sessionStorage.setItem('winner', JSON.stringify(jugador2))
                return window.location.href = '../pages/winner.html'
            }
        }
    }
}

const ComprobarDiagonal = () => {
    if (((tablero[0][0] === tablero[1][1]) && (tablero[1][1] === tablero[2][2])) &&
        ((tablero[0][0] !== '') && (tablero[1][1] !== '') && (tablero[2][2] !== ''))) {
        if (jugador1.ficha === tablero[1][1]) {
            sessionStorage.setItem('winner', JSON.stringify(jugador1))
            return window.location.href = '../pages/winner.html'
        } else {
            sessionStorage.setItem('winner', JSON.stringify(jugador2))
            return window.location.href = '../pages/winner.html'
        }
    }
    if (((tablero[0][2] === tablero[1][1]) && (tablero[1][1] === tablero[2][0])) &&
        ((tablero[0][2] !== '') && (tablero[1][1] !== '') && (tablero[2][0] !== ''))) {
        if (jugador1.ficha === tablero[1][1]) {
            sessionStorage.setItem('winner', JSON.stringify(jugador1))
            return window.location.href = '../pages/winner.html'
        } else {
            sessionStorage.setItem('winner', JSON.stringify(jugador2))
            return window.location.href = '../pages/winner.html'
        }
    }
}

const movimientoCpu = (cpu) => {
    let casillaCpu = Math.floor(Math.random() * 9);
    if(cpu.turno == true)
    while(document.getElementById(`${casillaCpu}`).innerHTML != cpu.ficha){
        casillaCpu = Math.floor(Math.random() * 9);
    }
    document.getElementById(`${casillaCpu}`).click()
    console.log(tablero)
}

