let x = 5;

console.log(x);

let test = 5;
console.log(typeof test);
test = "ahoj";
console.log(typeof test);

//const vs. let
const a = 2;
let b = 2;

b = 3;
//a = 5; nelze redeklarovat
console.log(a);
console.log(b);

let a_pole = [2, 5, 6];
console.log(a_pole);
const b_pole = [2, 5, 6];

a_pole[0] = 5;
b_pole[0] = 5;

a_pole = [1, 1, 1];
//b_pole = [1, 1, 1]; redeklarace pole nejde u const
console.log(b_pole);
console.log(a_pole);

let text = "Ahoj";
console.log(text.length);
console.log(text[0]);
console.log(text[text.length-1]);

//Backticks - pro template string
//Altgr + ý
//Alt + 9,6
console.log(`Ahoj hodnota text je '${text}'`);
//${proměnná}

let test2 = 2;
console.log(test2 **= 3); //mocnění
