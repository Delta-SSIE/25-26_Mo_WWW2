//Volání funkce
Pozdrav();
Scitani(2,5);
Scitani(5,10);
Scitani(5,10);
console.log(Nasobeni(5,5));

//Deklarace funkce
function Pozdrav()
{
    console.log("Ahoooj!");
}


function Scitani(a,b)
{
    console.log(a+b)
}

function Nasobeni(a,b)
{
    let nasobek = a*b;
    return nasobek;
}

let cislo = 0;

function Plus()
{
    cislo++;
}

console.log(cislo);
Plus();
Plus();
Plus();
console.log(cislo);


const Deleni = function(a,b) {return a/b};

console.log(Deleni(25,5));

const Odecet = (c,d) => c-d;

console.log(Odecet(10,5));
console.log(Odecet(15,5));



function DozivotniZasoba(vek, vekDoz, spotreba)
{
    return `Do konce života budeš potřebovat ještě ${(vekDoz-vek)*360*spotreba} šálků kávy.`;
}

console.log(DozivotniZasoba(25,77,2));

const zasoba = (vek, doz, spotreba) => `Do konce života budeš potřebovat ještě ${(doz-vek)*360*spotreba} šálků kávy.`;

console.log(zasoba(25,77,2));