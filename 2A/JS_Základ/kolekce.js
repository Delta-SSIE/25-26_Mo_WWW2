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