
//příklad 1
let x = 0;
const pole = [1, 1, 1, 5 , 20];

pole.forEach(() => x++);

console.log(x)

//příklad 2

const poleA = [5, 10, 20, 35];

const poleB = poleA.map((v) => (v % 2 ==0) ? v * 2 : null);
const poleC = poleB.filter((v) => v > 30);

console.log(poleB);
console.log(poleC);

//příklad 3

const lide = new Map ([
    [1,  {jmeno: "Ludva", vek: 18}],
    [2,  {jmeno: "Pepa", vek: 25}]
]);

const jmena = ["Albrecht", "Kamil", "Jarmila"];
let pocitadlo = 3;
jmena.forEach((v) => lide.set(pocitadlo,{jmeno: v, vek: 25}));

console.log(lide.get(3).jmeno);
console.log(lide.get(3).vek);


//For in a of

const array = [1, 2, 3];
const human = {
    name: "Pepík",
    age: 12
};

for(let vlastnost in human)
{
    console.log(vlastnost+ ": " +human[vlastnost]);
}


for(let cislo of array)
{
    console.log(cislo);
}
