let winner = JSON.parse(sessionStorage.getItem('winner'))
document.getElementById('winner-player').innerHTML = winner.nombre;

document.getElementById('restart').addEventListener('click', () => {
    window.location.href = '../pages/main-game.html'
})