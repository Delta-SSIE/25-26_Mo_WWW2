//DOM

//ID
let nadpis = document.getElementById('mainHeading');
console.log(nadpis);
//nadpis.innerHTML = "Ptakopysk";
nadpis.innerHTML += "!";

//TagName
let nadpis2 = document.getElementsByTagName('h2');
console.log(nadpis2);

nadpis2[0].innerHTML += "!";

for(let nadpis of nadpis2)
{
    nadpis.style.fontStyle = "italic";
}

//ClassName
let cards = document.getElementsByClassName('card');
console.log(cards);
for (let i = 0; i < cards.length; i++) {
    cards[i].style.backgroundColor = "yellow";
}

//QuerySelector
let odstavecPat = document.querySelector('.footer p');
console.log(odstavecPat);
odstavecPat.style.color = "red";

//QuerySelectorAll
let odstavecPodNad = document.querySelectorAll('h2+p');
console.log(odstavecPodNad);
odstavecPodNad[0].textContent = "Nový text";

//Přidání nových node

let karta = document.createElement('div');
karta.className = "card";
console.log(karta);
let kontejner = document.querySelector('div.container');

let novyNadpis = document.createElement('h2');
novyNadpis.className = "title";
novyNadpis.innerHTML = "Nová sekce";
let novyOdstavec = document.createElement('p');
novyOdstavec.innerHTML = "nějaký text"

karta.appendChild(novyNadpis);
karta.appendChild(novyOdstavec);
kontejner.appendChild(karta);