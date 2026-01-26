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


