/* eslint-disable prefer-const */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-var */

let firstName = "Jirka"; // ? Deklarace a inicializace proměnné
let lastName; // ? Samotná deklarace
lastName = "Novák"; // ? Samotná inicializace

console.log(firstName);
console.log(lastName);
console.log(firstName + " " + lastName);

firstName = "Josef"; // ? reinicializace
console.log(firstName);
console.log(firstName);
console.log(firstName);

firstName = "Petr";
console.log(firstName);

// * Proměnná let
{
  let city = "Praha"; // ? Proměnná city existuje jen uvnitř bloku kódu
}
// console.log(city); // ! Nebude fungovat!

let state = "Česko";
{
  console.log(state); // ? Proměnné pronikají do bloků kódu
}

// let state; // ! Redeklarace - u let proměnné není možná

// * Proměnná var
var contintent: string;
contintent = "Evropa";

var contintent = "Amerika"; // ! Redeklarace možná u var

{
  var car = "Škoda"; // ? Proměnná var je definovaná pro modul, bude fungovat i mimo složené závorky
}
console.log(car);

// * Proměnná const
const user = "Uživatel"; // ? Const je neměnná (nemůžu jí změnit hodnotu), musím ji deklarovat i inicializovat zároveň.
// user = "Admin"; // ! Nelze měnit const hodnotu
{
  const app = "Facebook";
}
// console.log(app); // ! Nelze, protože je const definovaná pro blok
// const test;
// test = "TC01"; // ! Nelze, const musím inicializovat zároveň s deklarací

/*

Více
řádková
poznámková

*/

/**
 * Toto je technicky víceřádková poznámka
 *
 * VS Code, ale i jiné IDE tento zápis používají jako tzv. JSDoc
 *
 * Pokud tento blok poznámky je například nad deklarací funkce (ukážeme si později),
 *
 * slouží jako dokumentace a je možné ji formátovat pomocí **Markdown**
 *
 * ``` js
 * // blok kódu
 * console.log("Ahoj!")
 * ```
 */
function addDoc() {}
