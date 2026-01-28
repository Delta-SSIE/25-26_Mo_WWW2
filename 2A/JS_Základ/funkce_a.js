let x = 0;
console.log(x);

//ctrl + K; Q - zapnutí Quokka

pozdrav();
pozdrav();
pozdrav();

function pozdrav()
{
    console.log("Hello!");
}

function scitani(a,b)
{
    return a+b;
}

console.log(scitani(5,10));
console.log(scitani(5));
console.log(scitani());


let a = 0;
function plus()
{
    a++;
}

plus();
plus();
console.log(a);

const nasobeni = function(a,b) { return a*b};

console.log(nasobeni(5,5));

const deleni = (a,b) => a/b;

console.log(deleni(nasobeni(5,5),5));

const dozivotniZasoba = (vek,vekDoz,denniSpot) => `Do konce života budeš potřebovat ${(vekDoz-vek)*360*denniSpot} šálků kávy.`

console.log(dozivotniZasoba(30,77,2));

