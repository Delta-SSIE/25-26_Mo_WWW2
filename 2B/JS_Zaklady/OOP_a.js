const human = {
    name: "Richard",
    age: 18
};
console.log(human);

human.favoriteFood = ["Banana", "Orange", "Apple"];
console.log(human);
console.log(human.favoriteFood[0]);
console.log(human.age);

//Zavorková syntaxe
console.log(human["age"]);
for(let vlastnost in human)
{
    console.log(vlastnost);
    console.log(human[vlastnost]);
    //console.log(human.vlastnost);
}

//Hodnota vlastnosti jako objekt
human.friend = {name: "Henry", age: 18};
console.log(human);
delete human.friend;
console.log(human);

//Reference v objektech
/*
friend = human; //reference na human

friend.name = "Henry";
console.log(human.name)
*/
const friend = {};
Object.assign(friend, human);
friend.name = "Henry"
friend.age = 18;
friend.favoriteFood[1] = "Peach";

human.friend = friend;
friend.friend = human;

console.log(human.name);
console.log(human.friend.friend.name);

human.Pozdrav = function()
{
    return `${this.name} and his age: ${this.age}`;
}

console.log(human.Pozdrav());


class Ctverec {
    constructor(s)
    {
        this.hrana = s;
    }
    barva = "červená";
    obvod() 
    {
        return this.hrana *4;
    }
    obsah()
    {
        return this.hrana*this.hrana
    }
}

const ctverecA = new Ctverec(5);
const ctverecB = new Ctverec(10);

console.log(ctverecA.barva);

console.log(ctverecA.obsah());
console.log(ctverecB.obvod());

//upraví všechny instance třídy Ctverec a přidá jim vlastnost s hodnotou
Ctverec.prototype.vzor = "pruhované";

console.log(ctverecA.vzor);
console.log(ctverecB.vzor);