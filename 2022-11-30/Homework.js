function rand(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
}

// FIRST TASK

const a = "Ryan Reynolds";

const b = "Charlie Hunnam";

if (a.length < b.length) {
  console.log(a);
} else {
  console.log(b);
}

// SECOND TASK

const vardas = "Mantas";
const pavarde = "Kubiliūnas.";
const gimimo = 1997;
const dabar = 2022;

console.log("Aš esu", vardas, pavarde, "Man yra", dabar - gimimo, "metai.");

// THIRD TASK

const first = "Ryan Reynolds";

const second = "Charlie Hunnam";

const third = "Yanlds Lienam";

console.log(third);

// FOURTH TASK

const c = "Once upon a time in hollywood";

console.log(c);

let moded = c;

moded = moded.replaceAll("o", "*");
moded = moded.replaceAll("O", "*");

console.log(moded);

// FIFTH TASK

const skaicius1 = rand(0, 2);
const skaicius2 = rand(0, 2);
const skaicius3 = rand(0, 2);
const skaicius4 = rand(0, 2);

console.log(skaicius1);
console.log(skaicius2);
console.log(skaicius3);
console.log(skaicius4);

let nuliai = 0;
let vienetai = 0;
let dvejetai = 0;

if (skaicius1 === 0) {
  nuliai++;
}
if (skaicius2 === 0) {
  nuliai++;
}

if (skaicius3 === 0) {
  nuliai++;
}

if (skaicius4 === 0) {
  nuliai++;
}

if (skaicius1 === 1) {
  vienetai++;
}
if (skaicius2 === 1) {
  vienetai++;
}

if (skaicius3 === 1) {
  vienetai++;
}

if (skaicius4 === 1) {
  vienetai++;
}

if (skaicius1 === 2) {
  dvejetai++;
}
if (skaicius2 === 2) {
  dvejetai++;
}

if (skaicius3 === 2) {
  dvejetai++;
}

if (skaicius4 === 2) {
  dvejetai++;
}

console.log("Gauti skaičiai:", skaicius1, skaicius2, skaicius3, skaicius4);
console.log("Gauti rezultatai:", nuliai, vienetai, dvejetai);
