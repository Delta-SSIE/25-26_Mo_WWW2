
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