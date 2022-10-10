class Jugador {

    constructor(nombre, tipo, ficha) {
        this.nombre = nombre,
            this.tipo = tipo
        this.turno = false
        this.ficha = ficha

    }
    // Metodos
}
// Creamos jugadores
let jugador1 = undefined;
let jugador2 = undefined;

const recogerDatos = (tipo) => {
    let nombreP1 = document.getElementById('player1').value;
    let nombreP2 = document.getElementById('player2').value;
    if(tipo == 'player1'){
        let tipo1 = tipo;
        jugador1 = new Jugador(nombreP1, tipo1, 'X');
        jugador1.turno = true;
        sessionStorage.setItem('datosP1' ,JSON.stringify(jugador1))
    }else if(tipo == 'player2'){
        let tipo2 = tipo
        jugador2 = new Jugador(nombreP2, tipo2, 'O')
        sessionStorage.setItem('datosP2',JSON.stringify(jugador2))
    }
}