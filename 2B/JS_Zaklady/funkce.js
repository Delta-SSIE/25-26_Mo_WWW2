//CTRL + K, Q - Quokka.js

let x = 5;
console.log(x);

function pozdrav()
{
    console.log("Hello world");
}

pozdrav();

function scitani(a,b)
{
    return a+b;
}

console.log(scitani(5,5));
console.log(scitani(10,20));

/*
for (let index = 0; index < 100; index++) {
    pozdrav();   
}
*/

//Obor platnosti
let y = 0;
function plus()
{
    y++;
}

plus();
plus();

console.log(y);

//const jako funkce
const nasobeni = function(a,b) {return a*b};

console.log(nasobeni(5,5));

const deleni = (a,b) => a/b;
console.log(deleni(25,5));
console.log(deleni(nasobeni(5,10),5));