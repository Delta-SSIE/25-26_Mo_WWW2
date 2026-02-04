if("25" == 25)
{
    console.log("podminka platí");
} else {
    console.log("podminka neplatí");
}

if("25" === 25)
{
    console.log("podminka platí");
} else {
    console.log("podminka neplatí");
}

//0, "", null, undefined - false
//jakékoliv číslo a string - true

if(0)
{
    console.log("podminka platí");
} else {
    console.log("podminka neplatí");
}

for (let i = 0; i < 10; i++) {
    if(i == 2)
    {
        continue;
    }
    if(i == 8)
    {
        break;
    }
    console.log(i);
}