const pole = [1, 2, 3, 4];
const stringPole = ["ahoj", "cus", "pa"];

console.log(pole);
console.log(stringPole);

console.log(pole[0]);
console.log(pole.toString());

pole[4] = 5;
console.log(pole);
pole.push(6);
console.log(pole);
pole.push(7,8);
console.log(pole);

for (let index = 0; index < stringPole.length; index++) {
    console.log(stringPole[index]);
}

for(let slovo of stringPole)
{
    console.log(slovo);
}

let objekt = {
    jmeno: "jan",
    vek: 25
};

for(vlastnost in objekt)
{
    console.log(vlastnost + ": " + objekt[vlastnost]);
}

let soucetPole = 0;

/*
pole.forEach(soucet);

function soucet(cislo)
{
    soucetPole += cislo;
}
*/

pole.forEach((cislo) => soucetPole+=cislo);

console.log(soucetPole);

stringPole.pop();
console.log(stringPole);
stringPole.shift();
console.log(stringPole);

pole.unshift(0);
console.log(pole);

let poleA = [0, 1];
let poleB = [2, 3];
//do A přesunou hodnoty B
//poleA.push(poleB);
poleB.forEach((value) => poleA.push(value));
console.log(poleA);
console.log(poleA.concat(poleB));

console.log(typeof pole);
console.log(Array.isArray(pole));

let poleNasobku = pole.map((cislo) => cislo*2);
console.log(poleNasobku);

let poleX = [0, 0, 0];
let poleY = poleX; //BACHA! Předává referenci na poleX
poleX[0] = 100;
console.log(poleY);

let poleFilt = pole.filter((cislo) => cislo % 2 == 0);
console.log(poleFilt);

//Sety

const setJmen = new Set();
setJmen.add("Pepa");
setJmen.add("Jaromír");
console.log(setJmen);
setJmen.add("Jaromír"); //Set má vždy unikátní prvky, nelze přidat prvek, který už v setu je
console.log(setJmen);

console.log(setJmen.has("Pepa"));

for(let prvek of setJmen.keys())
{
    console.log(prvek)
}

//Maps
const dluhy = new Map();

dluhy.set("Pepa",250);
dluhy.set("Franta",500);
dluhy.set("Ludmila",1000);

console.log(dluhy);

console.log(dluhy.get("Ludmila"));
console.log(dluhy.has("Pepa")); //vrací zda existuje daný klíč

dluhy.forEach((value, key) => console.log(`${key} mi dluží ${value} korun!`));

for(dluh of dluhy) {
    console.log(dluh);
    console.log(dluh[0]);
    console.log(dluh[1]);
}

for(klic of dluhy.keys()) {
    console.log(klic);
}

for(hodnota of dluhy.values()) {
    console.log(hodnota);
}

for(zaznam of dluhy.entries()) {
    console.log(zaznam[0]);
}

