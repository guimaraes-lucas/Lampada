const turnOnOff = document.getElementById ('turnOnOff')
const lamp = document.getElementById ('lamp')

function lampBroken() {
    return lamp.src.indexOf ('quebrada') > 1
}

function lampOn () {
    if (!lampBroken ()) {
        lamp.src = './img/ligada.jpg'
    }
}

function lampOff () {
    if (!lampBroken ()) {
        lamp.src = './img/desligada.jpg'
    }
        }

function lampBreak() {
    lamp.src = './img/quebrada.jpg'
}

function lampOnOff() {
    if (turnOnOff.textContent == 'Ligar') {
        lampOn ();
        turnOnOff.textContent = 'Desligar'
    }else{
        lampOff ();
        turnOnOff.textContent = 'Ligar'
    }
}

turnOnOff.addEventListener('click', lampOnOff)
lamp.addEventListener ('mouseover', lampOn)
lamp.addEventListener ('mouseout', lampOff)
lamp.addEventListener ('dblclick', lampBreak)

