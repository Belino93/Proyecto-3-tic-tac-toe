class Jugador {

    constructor(nombre, tipo, ficha, nfichas) {
        this.nombre = nombre,
            this.tipo = tipo
        this.turno = false
        this.ficha = ficha
        this.nfichas = nfichas
    }
    
}
// Creamos jugadores
let jugador1 = undefined;
let jugador2 = undefined;

const recogerDatos = (tipo) => {
    let nombreP1 = document.getElementById('player1').value;
    let nombreP2 = document.getElementById('player2').value;
    if(nombreP1 == '' && tipo == 'player1'){
        document.getElementById('box-p1').style.border='none'
        return alert('Introduce primero el nombre jugador')
    }else if(nombreP2 == '' && tipo == 'player2'){
        document.getElementById('box-p2').style.border='none'
        return alert('Introduce primero el nombre jugador')
    }
    
    switch(tipo){
        case 'player1':
            document.getElementById('box-p1').style.border='2px solid black'
            document.getElementById('box-cpu1').style.border='none'
            let tipo1 = tipo;
            jugador1 = new Jugador(nombreP1, tipo1, 'X', 3);
            jugador1.turno = true;
            sessionStorage.setItem('datosP1' ,JSON.stringify(jugador1))
        break;
        case 'player2':
            document.getElementById('box-p2').style.border='2px solid black'
            document.getElementById('box-cpu2').style.border='none'
            let tipo2 = tipo
            jugador2 = new Jugador(nombreP2, tipo2, 'O', 3)
            sessionStorage.setItem('datosP2',JSON.stringify(jugador2))
        break;
        case 'CPU1':
            document.getElementById('box-cpu1').style.border='2px solid black'
            document.getElementById('box-p1').style.border='none'
            let cpu1 = tipo
            jugador1 = new Jugador('CPU', cpu1, 'X', 3)
            sessionStorage.setItem('datosP1',JSON.stringify(jugador1))
        break;
        case 'CPU2':
            document.getElementById('box-cpu2').style.border='2px solid black'
            document.getElementById('box-p2').style.border='none'
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

let cajasSelectP1 = Array.from(document.getElementsByClassName('type-boxP1'))
cajasSelectP1.map((div) => {
    div.addEventListener('click', () => {
        div.className = 'type-box-click';
    })
})