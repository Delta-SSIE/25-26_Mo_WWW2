if(25 == "25")
{
    console.log("Platí!");
} else {
    console.log("Neplatí!");
}

if(25 === "25") //striktní rovnost, řeší i datový typ
{
    console.log("Platí!");
} else {
    console.log("Neplatí!");
}

if(null) 
{
    console.log("Platí!");
} else {
    console.log("Neplatí!");
}

//terarní operátor
let result = (25 > 10) ? "Platí" : "Neplatí";
console.log(result);

let pocitadlo = 0;
while(pocitadlo < 10)
{
    console.log(pocitadlo);
    pocitadlo++;
}

for (let i = 0; i < 10; i++) {
    console.log(i);
}

const pole = [5, 10, 25, 30];
for (let i = 0; i < pole.length; i++) {
    console.log(pole[i]);
}