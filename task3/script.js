const trafficLightEl = document.querySelector('#trafficLight');

function makeGreen() {
    trafficLightEl.style.background = ('green');
    trafficLightEl.removeEventListener('click', makeGreen);
    trafficLightEl.addEventListener('click', makeYellow);
}

trafficLightEl.addEventListener('click', makeGreen);

function makeYellow() {
    trafficLightEl.style.background = ('yellow');
    trafficLightEl.removeEventListener('click', makeYellow);
    trafficLightEl.addEventListener('click', makeRed);
}

function makeRed() {
    trafficLightEl.style.background = ('red');
    trafficLightEl.removeEventListener('click', makeRed);
    trafficLightEl.addEventListener('click', makeGreen);
}

const trafficLightGreen = document.querySelector('#trafficLightGreen');
const trafficLightYellow = document.querySelector('#trafficLightYellow');
const trafficLightRed = document.querySelector('#trafficLightRed');

function makeGreenCircle() {
    trafficLightGreen.style.background = ('green');
    trafficLightYellow.style.background = ('black');
    trafficLightRed.style.background = ('black');    
    trafficLightGreen.removeEventListener('click', makeGreenCircle);
    trafficLightYellow.removeEventListener('click', makeGreenCircle);
    trafficLightRed.removeEventListener('click', makeGreenCircle);
    trafficLightGreen.addEventListener('click', makeYellowCircle);
    trafficLightYellow.addEventListener('click', makeYellowCircle);
    trafficLightRed.addEventListener('click', makeYellowCircle);
}

function makeYellowCircle() {
    trafficLightYellow.style.background = ('yellow');
    trafficLightGreen.style.background = ('black');
    trafficLightRed.style.background = ('black');    
    trafficLightYellow.removeEventListener('click', makeYellowCircle);
    trafficLightGreen.removeEventListener('click', makeYellowCircle);
    trafficLightRed.removeEventListener('click', makeYellowCircle);
    trafficLightYellow.addEventListener('click', makeRedCircle);
    trafficLightGreen.addEventListener('click', makeRedCircle);
    trafficLightRed.addEventListener('click', makeRedCircle);
}

function makeRedCircle() {
    trafficLightRed.style.background = ('red');
    trafficLightGreen.style.background = ('black');
    trafficLightYellow.style.background = ('black');    
    trafficLightRed.removeEventListener('click', makeRedCircle);
    trafficLightGreen.removeEventListener('click', makeRedCircle);
    trafficLightYellow.removeEventListener('click', makeRedCircle);
    trafficLightRed.addEventListener('click', makeGreenCircle);
    trafficLightGreen.addEventListener('click', makeGreenCircle);
    trafficLightYellow.addEventListener('click', makeGreenCircle);
}

trafficLightGreen.addEventListener('click', makeGreenCircle);
trafficLightYellow.addEventListener('click', makeYellowCircle);
trafficLightRed.addEventListener('click', makeRedCircle);