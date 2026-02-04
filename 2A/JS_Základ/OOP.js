const auto = {
    barva: "oranžová"
};

console.log(auto);

auto.znacka = "Volvo";
console.log(auto);
console.log(auto.barva);
console.log(auto.znacka);

console.log(auto['barva']);
let vlastnost = "znacka";
console.log(auto[vlastnost]);

delete auto.barva;
console.log(auto['barva']);
console.log(auto);


const garaz = [
    {znacka: 'Volvo', nadrz:500},
    {znacka: 'BMW', nadrz:100},
    {znacka: 'Toyota', nadrz:250}
];

for(let auto of garaz)
{
    console.log(auto.nadrz);
}

const auta_nadrz200 = garaz.filter((a) => a.nadrz >= 200);
console.log(auta_nadrz200);

for(let vlastnost in garaz[0])
{
    console.log(vlastnost + " - " + garaz[0][vlastnost]);
}


//Předávání hodnoty vs. reference

let x = 2;
let y = x; //předána hodnota z proměnné x (x a y jsou dále nezavislé)
x = 5;
console.log(x + " " + y);

let poleA = [5, 10, 15];
let poleB = poleA; //předávám referenci na pole, když se změní jedno, tak se změní druhé
poleA[0] = 100;
console.log(poleB);
poleB[1] = 1000;
console.log(poleA);

let objektA = {jmeno: "Petr", vek: 100};
let objektB = objektA; //reference
objektB.jmeno = "Lukáš"
console.log(objektA);


//Metody (funkce) objektu

const ctverec = {
    hrana: 10,
    obsah: function()
    {
        return this.hrana * this.hrana;
    },
    obvod: function()
    {
        return this.hrana * 4;
    }    
};

console.log(ctverec.obsah());
console.log(ctverec.obvod());

