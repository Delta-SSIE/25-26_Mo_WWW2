
//Trigger na on vlastnosti v HTML
//<button onclick="Klik(this)">Zmáčkni mě!</button>
function Klik(id){
    id.innerHTML = "Tadá!"
}

//Trigger přes vlastnost on v JS
let nadpis = document.getElementById('mainHeading');
nadpis.onmouseenter = function()
    {
        this.style.backgroundColor = "yellow";
    }

//EventListener
let listItems = document.querySelectorAll('.card ul li');
for(item of listItems)
{
    item.addEventListener("click", function()
    {
        this.innerHTML = "Nic!";
    })
}

//Mouse Events
let img = document.querySelector('img');
img.addEventListener("mouseenter", function(e) {
    console.log(e);
})
let oblast = document.querySelector('.container div');

img.addEventListener("dblclick", function(e) {
    let souradnice = document.createElement('p');
    souradnice.innerHTML = `X: ${e.clientX} a Y: ${e.clientY}`;
    oblast.appendChild(souradnice);
})

//Keyboard
let input = document.getElementById('textinput');
let output = document.getElementById('textoutput');
/*
input.addEventListener("keypress", function(e)
    {
        output.innerHTML += e.key;
    })
*/
input.addEventListener("keydown", function(e)
    {
        if(e.key == "Enter")
        {
            output.innerHTML = input.value;
            input.value = null;        
        }
    })