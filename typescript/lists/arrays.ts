const cities = ["Praha", "Ostrava", "Plzeň"];
cities.push("Brno"); // ? Přidání nového prvku do array. Můžu to udělat navzdory tomu, že cities je konstanta, technicky totiž hodnotu neměním (jen její vnitřnosti), je to stále cities array

console.log(cities);

// * Vypsání 3 města
console.log("3. město: " + cities[2]);

cities.push("Hranice", "České Budějovice");

// * Vypsání všech měst pomocí cyklu for
for (let i = 0; i < cities.length; i++) {
  console.log(`${i + 1}. město je "${cities[i]}"`);
}
