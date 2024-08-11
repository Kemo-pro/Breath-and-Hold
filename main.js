// DOM Element 
const container = document.querySelector('#container');
const text = document.querySelector('#text');
// Time The Relax Breath
const totalTime = 7500;
const breathTime = (totalTime / 5) * 2;
const holdTime = totalTime / 5;

// Function To Breath

breathAnimation()

function breathAnimation(){
text.innerHTML = 'Breath In!';
container.className = 'container grow';

setTimeout(() => {

text.innerText = 'Hold'

setTimeout(() => {
text.innerText = 'Breath Out!'
container.className = 'container shrink';
}, holdTime)

},breathTime)
}

setInterval(breathAnimation, totalTime)