//DOM metody přístupu

//ID
let nadpis = document.getElementById('special');
console.log(nadpis)
//nadpis.innerHTML = "Tučnáci!";
nadpis.innerHTML += "!";

//TagName
let odstavce = document.getElementsByTagName('p');
console.log(odstavce);

odstavce[0].style.fontStyle = "italic";

for (let odstavec of odstavce)
{
    odstavec.innerHTML = "T: " + odstavec.innerHTML;
}

//ClassName
let cards = document.getElementsByClassName('card');

for (let i = 0; i < cards.length; i++) {
    cards[i].style.backgroundColor = "yellow";
    
}

//QuerySelector
let paticka = document.querySelector('.footer p');
paticka.innerHTML = "Patička";

let odstavecPod = document.querySelectorAll('h2+p');
for(let o of odstavecPod)
{
    o.innerHTML += "!!!";
}