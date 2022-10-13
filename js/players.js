class Jugador {

    constructor(nombre, tipo, ficha, nfichas) {
        this.nombre = nombre,
            this.tipo = tipo
        this.turno = false
        this.ficha = ficha
        this.nfichas = nfichas
    }
    // Metodo ¿Retirar ficha?
    
}
// Creamos jugadores
let jugador1 = undefined;
let jugador2 = undefined;

const recogerDatos = (tipo) => {
    let nombreP1 = document.getElementById('player1').value;
    let nombreP2 = document.getElementById('player2').value;
    if((nombreP1 == '' && tipo != 'CPU1' ) && (nombreP2 == '' && tipo != 'CPU2' )){
        return alert('Introduce primero el nombre jugador')
    }
    
    switch(tipo){
        case 'player1':
            let tipo1 = tipo;
            jugador1 = new Jugador(nombreP1, tipo1, 'X', 3);
            jugador1.turno = true;
            sessionStorage.setItem('datosP1' ,JSON.stringify(jugador1))
        break;
        case 'player2':
            let tipo2 = tipo
            jugador2 = new Jugador(nombreP2, tipo2, 'O', 3)
            sessionStorage.setItem('datosP2',JSON.stringify(jugador2))
        break;
        case 'CPU1':
            let cpu1 = tipo
            jugador1 = new Jugador('CPU', cpu1, 'X', 3)
            sessionStorage.setItem('datosP1',JSON.stringify(jugador1))
        break;
        case 'CPU2':
            let cpu2 = tipo
            jugador2 = new Jugador('CPU', cpu2, 'O', 3)
            sessionStorage.setItem('datosP2',JSON.stringify(jugador2))
        break;

        default:
            break;
    }
    
}

const validarDatos = () => {
    let jugador1 = JSON.parse(sessionStorage.getItem('datosP1'));
    let jugador2 = JSON.parse(sessionStorage.getItem('datosP2'));
    if(jugador1.tipo == 'CPU1' && jugador2.tipo == 'CPU2'){
        return alert('Solo puede haber una CPU')
    }else{
        window.location.href = '../pages/main-game.html'
    }
}

