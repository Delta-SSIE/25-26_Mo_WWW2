let inputs = document.querySelectorAll('input[type="password"]');
let submit = document.getElementById('submit');
let war = document.getElementById('warning');

inputs.forEach((input) => input.addEventListener("keyup",kontrola));

function kontrola()
{
    war.innerHTML = "";
    submit.disabled = "disabled";
   if(inputs[0].value != "" && inputs[1].value != "" && inputs[2].value != "")
   {
    let chybHlaska = document.createElement('p');
    if(inputs[0].value == inputs[1].value)
    {
        chybHlaska.innerHTML = "Staré a nové heslo se shoduje!";
    } else if(inputs[1].value != inputs[2].value)
    {
        chybHlaska.innerHTML = "Potvrzení hesla se neshoduje se zadaným heslem!"
    } else if(inputs[1].value.length < 8)
    {
        chybHlaska.innerHTML = "Heslo je přiliš krátké!"
    } else {
        submit.disabled = "";
    }
    
    war.appendChild(chybHlaska);
   }
}