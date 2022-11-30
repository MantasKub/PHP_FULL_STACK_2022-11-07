function rand(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min); // The maximum is inclusive and the minimum is inclusive}
}
console.log("Veikia external javascriptas failas");

const x = 10;

console.log("Pirmoji gauta reiksme: " + x);

// x = 15;

// console.log(x);

let y = 15;

y = 20;

console.log("Antroji gauta reiksme:", y);

y += 2;

console.log("Pliuso operatorius ", y);

y -= 10;

console.log("Minus operatorius ", y);

y *= 3;

console.log("Daugybos operatorius ", y);

y /= 2;

console.log("Dalybos operatorius ", y);

y++;

console.log("Inkrementinis operatorius ", y);

y--;

console.log("Dekrementinis operatorius ", y);

// Kondicinė logika

// y = false;

// if (y) {
//   console.log("Kintamasis egzistuoja");
// } else {
//   console.log("Kintamasis neegzistuoja");
// }

// Antras pavyzdys

// let z = false;

// console.log(typeof z);

// // Bang operatorius

// if (!z) {
//   console.log("Z turi neigiamą reikšmę");
// }

// Trečias pavyzdys

// let w = 40;

// if (w != 40) {
//   console.log("Kintamasis w nėra lygus 40");
// } else {
//   console.log("Kintamasis yra lygus 40");
// }

// Ketvirtas pavyzdys

// let pirmasSkaicius = 11;
// let antrasSkaicius = 11;

// if (pirmasSkaicius > antrasSkaicius) {
//   console.log("Pirmas skaicius didesnis");
// } else if (pirmasSkaicius === antrasSkaicius) {
//   console.log("Skaiciai yra lygus");
// } else {
//   console.log("Antras skaicius yra didesnis");
// }

// Penktas pavyzdys

// let pirmasSkaicius = 11;
// let antrasSkaicius = 11;

// if (pirmasSkaicius >= antrasSkaicius) {
//   console.log("Pirmas skaicius yra didesnis arba lygus antram skaiciui");
// } else {
//   console.log("Antras skaicius yra didesnis uz pirma skaiciu");
// }

// Stringai

const stringas = "Lorem ipsum is simply dummy text of the pritnting";

console.log(stringas);

console.log("Ketvirtoji stringo  raide:", stringas[4]);

console.log("Stringo ilgis yra");

console.log("Stringo ilgis yra:", stringas.length);

let modifikuotasStringas =
  "pridetas tekstas is priekio" + stringas + "pridetas tekstas is galo";

modifikuotasStringas = modifikuotasStringas.replaceAll("tekstas", "z");
modifikuotasStringas = modifikuotasStringas.replaceAll("simply", "hardly");

console.log(modifikuotasStringas);

const randomSkaicius = rand(5, 150);

console.log("Atsitiktinis skaicius", randomSkaicius);
