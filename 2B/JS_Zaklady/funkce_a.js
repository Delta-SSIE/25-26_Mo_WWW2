//Quokka Ctrl + K, Q

let promenna = 10;
console.log(promenna);

helloWorld();
helloWorld();
helloWorld();

console.log(scitani(10,5));
console.log(scitani(50,60));
console.log(scitani(50));

function scitani(x,y)
{
    return x+y
}

function helloWorld()
{
    console.log("Hello world!")
}

let a = 0;

function plus()
{
    a++;
}

plus();
plus();
console.log(a);


const nasobeni = function(a,b) {return a*b};
console.log(nasobeni(5,10));

const nasobeni2 = (a,b) => a*b;
console.log(nasobeni2(nasobeni(5,5),nasobeni2(10,5)));

const dozivotniZasob = (vek, doziti, spotreba) => `Do konce života budeš potřebovat ${(doziti-vek)*360*spotreba} kusů své zásoby.`;
console.log(dozivotniZasob(60,70,3));