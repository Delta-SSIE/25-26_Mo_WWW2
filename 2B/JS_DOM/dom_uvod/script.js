//DOM – Metody přístupu

//ID
const nadpis = document.getElementById('topheading');
console.log(nadpis);
nadpis.innerHTML += " (delfíni)";

//TagName
const odstavce = document.getElementsByTagName('p');
console.log(odstavce);
odstavce[0].textContent += "🐬";

for (let i = 0; i < odstavce.length; i++) {
    odstavce[i].innerHTML += "🐬";
}

//ClassName
const karty = document.getElementsByClassName('card');
console.log(karty);
for (let i = 0; i < karty.length; i++) {
    karty[i].style.color = "white"; //přepis style
}

//QuerySelector
const headinghab = document.querySelector('#habitat h2');
console.log(headinghab);
headinghab.innerHTML = "Prostředí";

//QuerySelectorAll
const odstavecPodnadpisem = document.querySelectorAll('h2+p');
console.log(odstavecPodnadpisem);

for(let odstavec of odstavecPodnadpisem)
{
    odstavec.style.color = "red";
}

//Změna atributu
const img = document.querySelector('#about img');
img.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfYztfPZY8GzYsXdrjSURb8b985ACy__sbEQ&s";