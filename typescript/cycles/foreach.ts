// typescript/cycles/foreach.ts
const elements = ["button", "field", "checkbox", "form"];

elements.forEach((element) => {
  console.log("Prvek: " + element);
});
/*

Cvičení - forEach ⌛5:00
Vytvořte ve složce: src/exercises soubor: foreach_exercise.ts
Vytvořte array: countries
Tuto array naplňte alespoň pěti string (text) hodnotami.
Vytvořte forEach, který postupně vypíše hodnoty z array countries

Výzva - procyklení 2 arrays:
Vytvořte ve složce: src/exercise soubor: foreach_challenge.ts
Vytvořte 2 arrays: firstName, lastName
Vytvořte pomocí 1 forEach cyklus, který vypíše arrays ve formátu: first_name, last_name

Tip: do forEach bloku můžete přidat index:
https://stackoverflow.com/questions/10179815/get-loop-counter-index-using-for-of-syntax-in-javascript 

*/
