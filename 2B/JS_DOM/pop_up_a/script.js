//Alert

/*
window.alert("AAAAAA!");
alert("Problém!");
*/

//Prompt
/*
let jmeno =  window.prompt("Zadej mi své jméno","Pepík");
console.log(jmeno);
document.write(jmeno);
*/
/*
let rok = window.prompt("Zadej mi rok?", 2026);
document.write(`Přští rok bude ${parseInt(rok)+1}`);
*/

//Confirm
/*
let potvrzeni = window.confirm("Podvádíš u testů?"); //true/false

if(potvrzeni)
{
    document.write("Zvolil jsi smrt!");
} else
{
    document.write("Gratuluji! Zvolil jsi moudře!");
}
*/

//Hádej číslo 
/*
let cislo = Math.floor((Math.random() * 50) + 1); 

for (let i = 0; i < 5; i++) {
    let tip = parseInt(window.prompt("Zadej mi svůj tip",0));

    if(tip == cislo)
    {
        window.alert("Gratuluji!");
        break;
    } else if (tip < cislo)
    {
        window.alert("Málo");
    } else {
        window.alert("Moc")
    }
    
};
*/