// typescript/operators/compare.ts
const number1 = 5;
const numberInString = "5";

// * Porovnání čísel s ignorací datového typu
// const equalWithoutType = number1 == numberInString;
// console.log(equalWithoutType);

// * Porovnání čísel s začleněním datového typy
// const equalWithType = number1 === numberInString;
// console.log(equalWithType);

// ? Console log kvůli ESLint (Error: is assigned a value but never used)
console.log("number1: " + number1);
console.log("numberInString: " + numberInString);
