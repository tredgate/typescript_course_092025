const a = 10;
const b = 6;
const operation: string = "divide";
let result;

switch (operation) {
  case "add":
    result = a + b;
    break;
  case "subtract":
    result = a - b;
    break;
  case "multiply":
    result = a * b;
    break;
  case "divide":
    result = a / b;
    break;
  default:
    throw new Error("Neplatná početní operace");
}
console.log(`Výsledek operace: ${operation} je: ${result}`);
