const objektA = {};
objektA.name = "Karel";

console.log(objektA);

const zak = {
    jmeno: "Pepa",
    vek: 25,
    prumerZnam: 1.5
};

console.log(zak);
console.log(zak.vek);

console.log(zak['vek']);
const zak2 = {};
for(vlastnost in zak)
{
    zak2[vlastnost] = "nic";
}
console.log(zak2);

delete zak2.vek;
console.log(zak2);

const ucitel = {
    jmeno: "Adam",
    zaci: [zak, zak2]
};

zak.ucitel = ucitel;
zak2.ucitel = ucitel;

console.log(ucitel);
/*
zak.predstavSe = function(){
    console.log(`${this.jmeno} a je mi ${this.vek}`)
}
    */
zak.predstavSe = function(){
    return `${this.jmeno} a je mi ${this.vek}`;
}

console.log(zak.predstavSe());

class Ctverec {
    constructor(strana)
    {
        this.hrana = strana;
    }
    obsah() {
        return this.hrana*this.hrana
    }
    obvod()
    {
        return this.hrana*4
    }
};

const ctverecA = new Ctverec(10);
const ctverecB = new Ctverec(5);

console.log(ctverecA.obsah());
console.log(ctverecB.obsah());

Ctverec.prototype.name = "Čtverec";
console.log(ctverecA.name);
console.log(ctverecB.name);

for(zaznam of Object.keys(zak))
{
    console.log(zaznam);
}

for(zaznam of Object.values(zak))
{
    console.log(zaznam);
}

for(zaznam of Object.entries(zak))
{
    console.log(zaznam);
}

zakMapa = new Map();
