// * Vygenerování náhodného uživatelské jména s předponou, kterou pošle uživatel
function generateUsername(prefix: string) {
  const randomNumber = Math.random() * 10_000; // ? Math.random vygeneruje náhodné číslo mezi 0 a 1, násobení 10_000 nám z náhodně vytvořeného čísla přehodí řády do celých čísel: 0.012345 => 123.45
  const roundRandomNumber = Math.round(randomNumber); // ? Math.round mi zaokrouhlí desetinné číslo na celé číslo
  const generatedUsername = prefix + "_" + roundRandomNumber;
  return generatedUsername;
  console.log("Toto se nevypíše (je za return)");
}

const adminUser = generateUsername("admin");
const customerUser = generateUsername("customer");

console.log("Admin uživatel: " + adminUser);
console.log("Customer uživatel: " + customerUser);
