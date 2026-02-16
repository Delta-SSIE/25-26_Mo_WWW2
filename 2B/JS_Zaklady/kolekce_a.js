const pole = [1, 5, 10, 25];

console.log(pole);

console.log(pole[0]);

/*
pole[10] = 25;
console.log(pole);
*/

pole.push(30);
pole.push(35);
console.log(pole);

for(let cislo of pole)
{
    console.log(cislo);
}

let text = "";
/*
pole.forEach(toTxt);
function toTxt(value)
{
    text +=value +" ";
}
*/
pole.forEach((value) => text += value + " ");

console.log(text);

pole.push(50);
console.log(pole);
pole.pop();
pole.pop();
console.log(pole.pop());
console.log(pole);

pole.shift();
console.log(pole);
pole.unshift(1);
pole.unshift(0);
console.log(pole);

console.log(typeof pole);
console.log(Array.isArray(pole));


let poleA = [5, 10, 15, 20];
let poleB = poleA;

let cisloA = 50;
let cisloB = cisloA;

cisloB = 100;
poleB[0] = 100;
console.log(poleA);
console.log(cisloA);

let poleC = [];
poleA.forEach((value) => poleC.push(value));
poleC[0] = 0;
console.log(poleA);

poleC = poleA.map((value) => value*2);
console.log(poleC);

let poleFil = poleC.filter((v) => v > 35);
console.log(poleFil);