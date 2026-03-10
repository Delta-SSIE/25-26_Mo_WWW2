function alert()
{
    document.write("Tadá");
}

function alert2()
{
    document.write(pocitadlo);
    if(pocitadlo == 10)
    {
        window.clearInterval(interval); //vypne interval
    }
    pocitadlo++;
}

let pocitadlo = 0;
window.setTimeout(alert, 2500);
let interval = window.setInterval(alert2, 1000);

let interval2 = window.setInterval(function() {
    let new2 = document.createElement('p');
    new2.innerHTML = "Něco";
    document.body.appendChild(new2)
    if(pocitadlo == 2)
    {
        window.clearInterval(interval2);
    }
}, 1000);