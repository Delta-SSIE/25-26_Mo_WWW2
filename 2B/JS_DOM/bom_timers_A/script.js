/*
window.setTimeout();
window.clearTimeout();
window.setInterval();
window.clearInterval();
*/

let stopT = document.getElementById('stopT');
let stopI = document.getElementById('stopI');
let startI = document.getElementById('startI');

let timer = window.setTimeout(function() {
    let novyTxt = document.createElement('p');
    novyTxt.innerHTML = "Ahooj!";
    document.body.appendChild(novyTxt);
},5000)


let interval = window.setInterval(vypis,1000);

function vypis() {
    let novyTxt = document.createElement('p');
    novyTxt.innerHTML = "Čus!";
    document.body.appendChild(novyTxt);
}

stopI.addEventListener("click", () => window.clearInterval(interval));
stopT.addEventListener("click", () => window.clearTimeout(timer));
startI.addEventListener("click", () => interval = window.setInterval(vypis,1000));