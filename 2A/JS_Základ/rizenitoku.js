
if(25 == "25") //rovnost neřeší datové typy
{
    console.log("Rovnost!");
}

if(25 === "25") //striktní rovnost řeší datové typy
{
        console.log("Striktní rovnost!");
}

//falsey
let x;
x = '';
x = null;
x = 0;
if(x)
{

} else {
    console.log("Tadá!");
}

let y = 0;
while(y < 5)
{
    console.log(y);
    y++;
}

for (let i = 0; i < 10; i++) {
    if(i == 2)
    {
        continue;
    }
    if(i == 7)
    {
        break;
    }
    console.log(i);
}

console.log(`ahoj '${y}"`)