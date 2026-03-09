let old = document.getElementById('oldpass');
let pass = document.querySelector('#pass');
let pass2 = document.getElementById('pass2');
let submit = document.getElementById('submit');
let war = document.getElementById('warning');

old.addEventListener("keydown",kontrola);
pass.addEventListener("keydown",kontrola);
pass2.addEventListener("keydown",kontrola);

function kontrola()
{
    if(old.value != "" && pass.value != "" && pass2.value != "")
    {
        submit.disabled = "";
    } else {
        submit.disabled = "disabled";
    }
}

submit.addEventListener("click", function() {
    war.innerHTML = "";
    let odstavec = document.createElement('p');
    if(pass.value != pass2.value)
    {
        odstavec.innerHTML = "Heslo a potvrzení se neshoduje!";
       
    } else if(old.value == pass.value)
    {
        odstavec.innerHTML = "Staré a nové heslo jsou stejné";
    } else if(pass.value.length < 8)
    {
        odstavec.innerHTML = "Heslo je přiliš krátké";
    } else {
                odstavec.innerHTML = "Ukládám heslo!";
    }
     war.appendChild(odstavec);


})