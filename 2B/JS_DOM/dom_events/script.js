//Funkce navazaná na onclick definovaný v HTML
    let sekceHab = document.getElementById('habitat');

function Tada(id)
{
    id.innerHTML = "Tadá!";
    sekceHab.removeChild(sekceHab.firstChild);
}

//Funkce na atribut, který se naváže až v JS
let karty = document.getElementsByClassName('card');
console.log(karty);
for(karta of karty)
{
    karta.ondblclick = function()
    {
        this.innerHTML = "";
    }
}

//EventListener
let nadpis = document.getElementById('topheading');

nadpis.addEventListener("click", function(){
    let text = this.innerHTML;
    console.log(text);
    this.innerHTML = "";
    for (let i = 2; i < text.length; i++) {
        this.innerHTML += text[i];
    }
})

nadpis.addEventListener("click", function(e){
   console.log(e);
   console.log(e.target);
})

//Mouse events - x a y

let obrazek = document.querySelector('img');
let vysledek = document.createElement('p');
let sekceVys = document.getElementById('about');
 sekceVys.appendChild(vysledek);

obrazek.addEventListener("dblclick", function(e)
 {
    vysledek.innerHTML = `X=${e.clientX} Y=${e.clientY}`
 });


//Keyboard Events
let input = document.getElementById('textbox');
let textarea = document.createElement('p');
sekceHab.appendChild(textarea);

input.addEventListener("keydown", function(e){
    if(e.key == "Enter")
    {
        textarea.innerHTML = input.value;
        input.value = null;
    }
})

//EventListener na celou page
document.addEventListener("keydown", function(e){
    if(e.key == "e")
    {
        console.log(e);
        document.body.innerHTML = "";
    }
});

