//BOM pop-up

//window BOM
//document DOM

//Alert - zpráva

//window.alert("AAAAA!");

//Prompt
/*
let jmeno = window.prompt("Zadej mi své jméno","Pepa");
document.write("<h3>"+jmeno+"</h3>"); 
*/
/*
let rok = window.prompt("Zadej letošní rok",2026);
document.write(`Příští rok je ${parseInt(rok) + 1}`);
*/

//Confirm
/*
let potvrzeni = window.confirm("Potvrzuješ, že podvádíš u testů?"); //vrací true/false

if(potvrzeni)
{
    document.write("Tak zhyň!");
} else 
{
    document.write("Zvolil jsi moudře!");
}
*/


//Hádej číslo

let cislo = Math.floor((Math.random() * 50) + 1); 

for (let i = 0; i < 5; i++) {
    let tip = window.prompt("Zadej mi tvůj tip", 0);
    if(parseInt(tip) == cislo)
    {
        document.write("Vyhrál jsi!");
        break;
    } else if (parseInt(tip) < cislo)
    {
        window.alert("Málo!");
    } else {
         window.alert("Moc!");
    }
    
}