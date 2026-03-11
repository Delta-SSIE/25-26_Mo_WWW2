/*
window.setTimeout();
window.clearTimeout();
window.setInterval();
window.clearInterval();
*/

let pocitadlo = 0;
let stop = document.getElementById('stop');

stop.addEventListener("click", () => window.clearInterval(timer));

let timer = window.setTimeout( function() {
    console.log("ahoj");
},5000);

let interval = window.setInterval(function() {
    let odstavec = document.createElement('p');
    odstavec.innerHTML = "Ahoj";
    document.body.appendChild(odstavec);
    pocitadlo++;
    if(pocitadlo == 10)
    {
        window.clearInterval(interval);
    }

}, 500);


