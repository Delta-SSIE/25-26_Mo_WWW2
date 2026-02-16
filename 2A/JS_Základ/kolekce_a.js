const poleCisla = [5, 10, 25, 30];
const poleString = ["Ahoj", "Čus", "Pa"];

console.log(poleCisla);

poleCisla[0] = 100;
console.log(poleCisla[0]);
console.log(poleCisla);

/*
poleCisla[25] = 1000;
console.log(poleCisla);
*/

poleCisla.push(1000);
console.log(poleCisla);
poleCisla[poleCisla.length] = 1001;
console.log(poleCisla);

for(let pozdrav of poleString)
{
    console.log(pozdrav);
}

/*
let objekt = {
    name: "Jan",
    age: 18
}

for(let vlastnost in objekt)
{
    console.log(vlastnost);
}
*/

let soucet = 0;
/*
poleCisla.forEach(scitej);

function scitej(value)
{
    soucet += value;
}
*/
poleCisla.forEach((v) => soucet+=v);
console.log(soucet);

poleCisla.push(500);
console.log(poleCisla);
poleCisla.pop();
poleCisla.pop();
console.log(poleCisla);

poleCisla.shift();
console.log(poleCisla);
poleCisla.unshift(0);
console.log(poleCisla);

const poleA = [1, 2, 3];
const poleB = [4, 5, 6];
const poleAB = []
/*
poleAB.push(poleA);
poleAB.push(poleB);
*/
poleA.forEach((cislo) => poleAB.push(cislo));
poleB.forEach((cislo) => poleAB.push(cislo));
console.log(poleAB);
console.log(poleAB.pop());

console.log(typeof poleAB);
console.log(Array.isArray(poleAB));

let poleCopyAB = poleAB;
poleCopyAB[0] = 100;
console.log(poleAB);

poleNasobAB = poleAB.map((v) => v*2);
console.log(poleNasobAB);
poleNasobAB[0] = 0;
console.log(poleNasobAB);
console.log(poleAB);

poleFilt = poleAB.filter((x) => x % 2 == 0);
console.log(poleFilt);

//Set

const setCisel = new Set([1, 2, 4]);
setCisel.add(6);
setCisel.add(6); //nepřidá se, protože hodnota už v setu je
console.log(setCisel);
setCisel.add(4);
console.log(setCisel);

for(cislo of setCisel)
{
    console.log(cislo);
}

console.log(setCisel.has(6));

const auta = new Map();
auta.set("Toyota",10);
auta.set("Volvo", 5);
console.log(auta);

console.log(auta.get("Volvo"));

for(let auto of auta.keys())
{
    console.log(auto);
}

for(let auto of auta.values())
{
    console.log(auto);
}

for(let auto of auta.entries())
{
    console.log(auto);
}

let nadrz = 0;
auta.forEach((v,k) => (k == "Toyota")? nadrz += v : "");
console.log(nadrz);
