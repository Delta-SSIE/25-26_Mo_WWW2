let x = 0;
const y = 5;
let pole = [5,1,10];
const poleCons = [1, 2, 3];

console.log(x);
console.log(y);
console.log(pole);
console.log(poleCons);

poleCons[0] = 100;
poleCons[3] = 101;
pole[0] = 10;
// y = 10;
x = 5;
console.log(x);
console.log(y);
console.log(pole);
console.log(poleCons);

pole = [0, 0, 0];
//poleCons = [1, 1, 1];

console.log(pole);
console.log(poleCons);

console.log(typeof x);
x = "Ahoj";
console.log(typeof x);
console.log(x[0]);
console.log(x.length);

console.log(`Ahoj ${x}!`);

x = 2 + " AAAAA";
console.log(typeof x);

