let nadpis = document.getElementById('heading');

/*
nadpis.onclick = kliknuti;

function kliknuti()
{
    console.log("aaa");
}

*/

//Mouse
nadpis.addEventListener("click", () => nadpis.innerHTML = "AAA");
nadpis.addEventListener("mouseenter", zmenbarvu);
nadpis.addEventListener("mouseleave", zmenbarvu);

let divObrazek = document.querySelector('.card.image');
let obrazek = document.querySelector('img');
let text = document.createElement('p');

obrazek.addEventListener("click", function(event) {
    text.innerHTML = `X: ${event.clientX} Y: ${event.clientY}`;
    divObrazek.appendChild(text);
})

function zmenbarvu() {
    if(nadpis.style.backgroundColor == "yellow")
    {
        nadpis.style.backgroundColor = "#6b4f3b";
    } else {
        nadpis.style.backgroundColor = "yellow";
    }
}

//Key

let input = document.querySelector('.card input');
let textOut = document.getElementById('textinput');

input.addEventListener("keyup", function(event) {
    console.log(event.key);
    if(event.key == "Enter")
    {
        textOut.innerHTML = input.value;
        input.value = null;
    }
});