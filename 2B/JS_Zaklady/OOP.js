const clovek = {};
console.log(typeof clovek);

const auto = {
    znacka: "Toyota",
    najeto: 10500,
    nadrz: 50,
    spotrebaNaKm: 0.1
};

//tečková syntaxe
clovek.jmeno = "Jakub";
console.log(auto);
console.log(clovek);
console.log(auto.najeto);

//zavorková syntaxe
clovek['vek'] = 15;
console.log(clovek);
console.log(auto["znacka"]);

for(let vlastnost in auto)
{
    console.log(`Vlastnost: ${vlastnost} a hodnota: ${auto[vlastnost]}`);
    //nejde auto.vlastnost
}

clovek.oblibenejidlo = ["kůra stromu", "bahno", "lékořice"];
clovek.kamarad = {jmeno: "Jindra", vek: 28};
console.log(clovek);

//smazání vlastnosti s hodnotou
delete clovek.kamarad;
console.log(clovek);

//Ref a předáním hodnoty
let x = 5;
let y = x; //reálně se předala hodnota
x = 10;
console.log(y);

let poleA = [1, 5];
let poleB = poleA; //předala se reference na jeden prostor v paměti
poleA[0] = 100;
console.log(poleB);

const clovekA = {jmeno: "Pepa", vek: 28};
const clovekB = clovekA; //předala se reference
clovekB.jmeno = "Lukáš";
console.log(clovekA);

let clovekC = {};
Object.assign(clovekC,clovekA); //předání vlastností a hodnot do nového objektu
console.log(clovekC);
clovekC.jmeno = "Petr";
console.log(clovekA);

clovekC.kamarad = clovek;
clovek.kamarad = clovekC;
console.log(clovek);

clovek.kamarad.jmeno = "Bedřich";
console.log(clovekC);

const ctverec = {
    hrana: 20,
    obvod: function() {
        return this.hrana*4
    }
}

console.log(ctverec.obvod());
ctverec.hrana = 5;
console.log(ctverec.obvod());

class Ctverec {
    constructor(s)
    {
        this.hrana = s;
    }
    barva = "oranžová";
    obvod()
    {
        return this.hrana*4
    };
    obsah()
    {
        return this.hrana*this.hrana
    }
}

const ctverecA = new Ctverec(10);
const ctverecB = new Ctverec(8);

console.log(ctverecA);
console.log(ctverecB);
console.log(ctverecB.obvod());
console.log(ctverecA.obvod());
console.log(ctverecB.obsah());
console.log(ctverecA.obsah());

Ctverec.prototype.vzor = "pruhy";
console.log(ctverecA);
console.log(ctverecB);

console.log(Object.entries(clovek));