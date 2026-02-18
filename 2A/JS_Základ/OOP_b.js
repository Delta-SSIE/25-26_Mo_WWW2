const clovek = {
    jmeno: "Pepík",
    vek: 18
};

clovek.adresa = "Novákova 123";
console.log(clovek);
console.log(clovek.jmeno);

//Zavorková syntaxe
console.log(clovek['vek']);
for (let vlastnost in clovek)
{
    console.log(vlastnost);
    console.log(clovek[vlastnost]);
}

delete clovek.adresa;
console.log(clovek);

//vlastnost - pole, objekt
clovek.oblibeneJidlo = ["špagety", "rajská","knedlík"];
clovek.kamarad = {jmeno: "Eliška", vek: 19};
console.log(clovek);
console.log(clovek.kamarad.jmeno);

delete clovek.kamarad;
const clovekB = clovek; //Reference
const kamarad = {};
Object.assign(kamarad,clovek)
clovek.jmeno = "Jarmila"
console.log(clovek);
console.log(kamarad);
kamarad.vek = 20;
kamarad.oblibeneJidlo[0] = "špenát";

//reference přes vlastnost na jiný objekt
clovek.kamarad = kamarad;
kamarad.kamarad = clovek;
console.log(clovek);

clovek.kamarad.oblibeneJidlo[1] = "rizoto";
console.log(kamarad.oblibeneJidlo);
console.log(clovek.kamarad.kamarad.kamarad.kamarad);

clovek.pozdrav = function() {
    return `${this.jmeno} a vek: ${this.vek}`
}

console.log(clovek.pozdrav());

class Ctverec {
    constructor(s)
    {
        this.hrana = s;
    }
    barva = "oranžová"

    obvod()
    {
        return this.hrana*4
    }
    obsah()
    {
        return this.hrana*this.hrana
    }
}

const ctverecA = new Ctverec(10);
const ctverecB = new Ctverec(5);
const ctverecC = new Ctverec(3);

console.log(ctverecA.obsah());
console.log(ctverecB.obsah());
console.log(ctverecA.obvod());
console.log(ctverecB.obvod());

Ctverec.prototype.vzor = "pruhy";
console.log(ctverecA);
console.log(ctverecB);

//Objekt a Mapa
const mapaClovek = new Map(Object.entries(clovek));
console.log(mapaClovek);
console.log(mapaClovek.get("jmeno"));
const clovekZmapy = Object.fromEntries(mapaClovek);
console.log(clovekZmapy);