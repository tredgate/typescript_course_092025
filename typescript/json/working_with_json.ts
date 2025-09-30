// ? Import json souboru - název vymýšlíme
import jsonData from "./data.json";

const jsonString =
  '{"userId":55,"username":"Greyson.Nicolas","email":"Rex_Bashirian@example.org","createdAt":"2023-10-26","updatedAt":null,"active":1}';

// ? Převedení dat na jiný dat = parse
const jsonObject = JSON.parse(jsonString); // ? Převede string na object literal

console.log("ID uživatele: " + jsonObject.userId);
console.log("Email: " + jsonObject.email);

// * Příklad z převodu objektu do JSON najdete v typescript/objects/test-runner/test_runner.ts

// * Příklad použití importovaného json:
console.log("Jméno: " + jsonData.name);
console.log("První kurz: " + jsonData.courses[0]);
