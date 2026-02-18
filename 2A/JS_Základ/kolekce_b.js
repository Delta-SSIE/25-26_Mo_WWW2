const pole = [25, 15, 10, 1];

for (let i = 0; i < pole.length; i++) {
    console.log(pole[i]);
}

for(let cislo of pole)
{
    console.log(cislo);
}

let cisla = "";
pole.forEach((value) => cisla += value + " ");
console.log(cisla);

//pole[25] = 50;
pole.push(25);
pole.pop();
pole.shift();
pole.unshift(20);
console.log(pole);

const poleB = pole; //předání reference
poleB[0] = 10;
console.log(pole);

const poleNasobky = pole.map((v) => v*2);
console.log(poleNasobky);
const poleFil = pole.filter((v) => v % 2 == 0);
console.log(poleFil);

//Sety
const setJmen = new Set(["Honza", "Pepa", "Kačka"]);
console.log(setJmen);
setJmen.add("Eliška");
console.log(setJmen);
setJmen.add("Eliška");
setJmen.add("Pepa");
console.log(setJmen);

//Mapa
const dluhy = new Map([
    ["Kamil",500]
]);

dluhy.set("Rozárka",1000);
dluhy.set("David",200);
console.log(dluhy);
console.log(dluhy.get("Kamil"));
const dluhyMale = new Map();
dluhy.forEach((value,key) => (value <= 500) ? dluhyMale.set(key,value) : "");
console.log(dluhyMale);
