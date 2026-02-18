const setJmen = new Set(["Jana", "Pepa"]);
console.log(setJmen);
for(let jmeno of setJmen)
{
    console.log(jmeno);
}

setJmen.add("Ulrich");
setJmen.add("Jana"); //Set má unikátní hodnoty, nelze přidat jednu hodnotu znovu
console.log(setJmen);
console.log(setJmen.has("Ulrich"));

//Mapa
const dluhy = new Map([
    ["Pepa",500] //key-value (klíč string, value num)
])

dluhy.set("Ludmila",1000);
dluhy.set("Richard",100);
console.log(dluhy);
console.log(dluhy.get("Richard"));
dluhy.set("Richard",dluhy.get("Richard")+100);
console.log(dluhy.get("Richard"));

dluhy.forEach((value, key) => dluhy.set(key,value+200));
console.log(dluhy);

for(let dluh of dluhy)
{
    console.log(dluh);
    console.log(dluh[0]);
    console.log(dluh[1]);
}

for(let key of dluhy.keys())
{
    console.log(key);
}

for(let value of dluhy.values())
{
    console.log(value);
}

for(let entrie of dluhy.entries())
{
    console.log(entrie);
}