//sem přijde váš kód

let old = document.getElementById('oldpass');
let pass = document.getElementById('pass');
let pass2 = document.getElementById('pass2');

let submit = document.getElementById('submit');
let war = document.getElementById('warning');

old.addEventListener("keyup",kontrola);
pass.addEventListener("keyup",kontrola);
pass2.addEventListener("keyup",kontrola);

function kontrola()
{
    if(old.value =! "" && pass.value != "" && pass2.value != "")
    {
        submit.disabled = "disabled";
        war.innerHTML = "";
        let chybovaHlaska = document.createElement('p');
        if(old.value == pass.value || old.value == pass2.value)
        {
            chybovaHlaska.innerHTML = "Staré a nové heslo se shoduje!"
        } else if(pass.value != pass2.value)
        {
            chybovaHlaska.innerHTML = "Heslo a potvrzení hesla nejsou stejná!"
        } else if(pass.value.length < 8)
        {
            chybovaHlaska.innerHTML = "Heslo je přiliš krátké!"
        } else {
            submit.disabled = "";
        }
        war.appendChild(chybovaHlaska);
    }
}