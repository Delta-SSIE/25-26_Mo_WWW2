//write

// document DOM
// window BOM

document.write("<p>AAAAA</p>");

//BOM - pop-up

//Alert
//window.alert("AAAAAAAA!");

//Prompt
/*
let cisloA = window.prompt("Zadej mi číslo A", 0);
let cisloB = window.prompt("Zadej mi číslo B", 0);
let vysledek = cisloA + cisloB;
document.write(vysledek);
*/

//Confirm
/*
let potvrzeni = window.confirm("Potvrdíš mi souhlas s užitím tých dat?");
if(potvrzeni)
{
    document.write("ANO");
} else 
{
    document.write("NE");
}
    */

//úkol

let cislo = Math.floor((Math.random() * 50) + 1); 

/*
for (let i = 0; i < 5; i++) {
    let tip = parseInt(window.prompt("Tipni si jaké čislo si myslim?"));
    if(tip == cislo)
    {
        window.alert("Vyhrál jsi! Gratuluji!");
        break;
    } else if(tip < cislo)
    {
        window.alert("Málo!");
    } else {
        window.alert("Moc!");
    }
}
*/