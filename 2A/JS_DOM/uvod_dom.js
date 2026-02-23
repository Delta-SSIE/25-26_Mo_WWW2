//ID
let specialOdstavec = document.getElementById('special');
console.log(specialOdstavec);

console.log(specialOdstavec.innerHTML);
specialOdstavec.innerHTML = "Banán";


//Tag
let odstavce = document.getElementsByTagName('p');
console.log(odstavce)
odstavce[1].innerHTML = "Druhý odstavec!";

//Class
let posledniOdstavce = document.getElementsByClassName('last');
console.log(posledniOdstavce)
posledniOdstavce[1].innerHTML = "Druhý odstavec!";

//Queryselector
let special2 = document.querySelector('div #special');
let odstavcePodnadpisem = document.querySelectorAll('h2+p')
console.log(special2);
console.log(odstavcePodnadpisem);

//atribut
let odkazy = document.getElementsByTagName('a');
odkazy[0].href = "https://www.google.com/";

//style
odstavce[1].style.color = "white";
odstavce[1].style.fontFamily = "Arial";
