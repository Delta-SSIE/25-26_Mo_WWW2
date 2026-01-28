let x = 10;
console.log(x);

let cislo = 10;
const text = "Ahoj";

cislo = 11;
console.log(cislo);

//text = "Hello"; nelze redeklarovat konstantu
console.log(text);
console.log(cislo);

let poleA = [5, 1, 10];
const poleB = [5, 1, 10];

poleA[0] = 10;
poleB[0] = 15;

poleA = [0, 0, 0, 0, 0];
// poleB = [0, 0, 0, 0, 0]; nelze přiřadit novou hodnotu poli (lze měnit hodnoty na indexech)
console.log(poleA);
console.log(poleB);

poleB[10] = 50;
console.log(poleB);

let y = 5.8;
console.log(typeof y);
y += "Ahoooj";
console.log(typeof y);
console.log(y);

//Zpětné uvozovky pro šablonovité řetězce
//Alt + Num 9 + Alt + Num 6
//AltGr + ý (dvakrát)

console.log(`Tady vypíšu nějaké hodnoty proměnných ${y} a tady jinou ${cislo}`);
