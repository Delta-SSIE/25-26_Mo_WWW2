const pole = ["auto", "kolo", "koloběžka"];
console.log(pole);

console.log(pole.toString());

pole[0] = "autobus";
console.log(pole);

pole[3] = "motorka";
console.log(pole);

/*
pole[10] = "letadlo";
console.log(pole);
*/

pole.push("letadlo");
console.log(pole);
pole.pop();
console.log(pole);

for(let vozidlo of pole)
{
    console.log(vozidlo);
}

let objekt = {
    name:"John",
    age: 18
}

for(let atribut in objekt)
{
    console.log(atribut);
}

pole.forEach(vypis);

function vypis(prvek)
{
    console.log(prvek)
}

let cislaA = [1, 2, 3];
let cislaB = [4, 5, 6];

cislaB.forEach((a) => cislaA.push(a));
console.log(cislaA);

cislaA.unshift(0);
console.log(cislaA);

objekt["name"] = "Jenny";
console.log(objekt["name"]);

console.log(typeof cislaA);
console.log(Array.isArray(cislaA));

cislaNasobena = cislaA.map((cislo) => cislo*2);

/*
function nasob(cislo)
{
    return cislo * 2;
}
*/

console.log(cislaNasobena);

const poleFilter = cislaNasobena.filter((value) => value > 5);
console.log(poleFilter);

//Sude prvky
const pole_prvky = [23, -8, 6, 3, 12, 2, 0, 0, 5, 18, 6, 14, 15];
console.log(pole_prvky.filter((a) => a % 2 == 0));

//Sety
const set = new Set();
const set2 = new Set([5, 10, 1]);

set.add(10);
set.add(10); //podruhé se nepřidá, protože už v setu je
console.log(set);

console.log(set2.has(1));

for(let prvek of set2)
{
    console.log(prvek);
}

const dluhy = new Map();

dluhy.set("Jaromír",500);
dluhy.set("František",100);
dluhy.set("Pepa",50);

console.log(dluhy);
console.log(dluhy.get("Pepa"));

for(let klic of dluhy.keys())
{
    console.log(klic);
}

for(let value of dluhy.values())
{
    console.log(value);
}

for(let zaznam of dluhy.entries())
{
    console.log(zaznam);
    console.log(zaznam[0]);
    console.log(zaznam[1]);
}