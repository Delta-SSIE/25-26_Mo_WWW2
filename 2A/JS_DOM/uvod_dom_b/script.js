let karty = document.getElementsByClassName('card');
console.log(karty);
for(let karta of karty)
{
    karta.style.backgroundColor = "yellow";
}

let odstavceVkartach = document.querySelectorAll('.card p')
let odstavceVkarte = document.querySelector('.card p')
console.log(odstavceVkartach);
console.log(odstavceVkarte);

/*
let obrazek = document.querySelector('img');
let atribut = "src";

//obrazek.atribut = "web";
obrazek.setAttribute(atribut,"blbost")
*/

//vytvoření prvků
let novaKarta = document.createElement('div');
novaKarta.className = "card"; //přidání třídy card

let novyNadpis = document.createElement('h2');
novyNadpis.textContent = "Nadpis jak víno";
let novyOdstavec= document.createElement('p');
novyOdstavec.textContent = "lorem ipusm";

//přidání prvků k nodes, které už existují
let container = document.querySelector('div.container');
console.log(container);

novaKarta.appendChild(novyNadpis);
novaKarta.appendChild(novyOdstavec);

container.appendChild(novaKarta);

//document.body.appendChild  