let inputs = document.querySelectorAll('input[type="password"]');
let war = document.getElementById('warning');
let submit = document.getElementById('submit');
console.log(inputs);

inputs.forEach((v) => v.addEventListener("keyup", kontrola));

function kontrola() {
    if(inputs[0].value != "" && inputs[1].value != "" && inputs[2].value != "")
    {
        submit.disabled = "disabled";
        war.innerHTML = "";
        let odstavec = document.createElement('p');
        if(inputs[0].value == inputs[1].value)
        {
            odstavec.innerHTML = "Staré a nové heslo je stejné!"
        } else if(inputs[1].value != inputs[2].value)
        {
            odstavec.innerHTML = "Heslo a jeho potvrzení se neshoduje!"
        } else if(inputs[1].value.length < 8)
        {
            odstavec.innerHTML = "Heslo je přiliš krátké!"
        } else {
            submit.disabled = "";
        }
        war.appendChild(odstavec);
    }
}