// typescript/operators/assignment.ts
let number = 4;
const number2 = 5;

// * tradiční součet dvou čísel a přiřazení do jednoho:
number = number + number2;
console.log("Součet dvou čísel: " + number); // 9

// * Zkrácený zápis:
number += number2;
console.log("Součet dvou čísel: " + number); // 14
