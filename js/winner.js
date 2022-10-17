let winner = JSON.parse(sessionStorage.getItem('winner'))
document.getElementById('winner-player').innerHTML = winner.nombre;

document.getElementById('restart').addEventListener('click', () => {
    sessionStorage.removeItem('winner')
    window.location.href = '../pages/main-game.html'
})

document.getElementById('player-select').addEventListener('click', () => {
    sessionStorage.clear()
    window.location.href = '../pages/players.html'
})
