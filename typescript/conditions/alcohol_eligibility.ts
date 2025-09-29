const actualAge = 19;
const drinkingAgeLimit = 18;
const fullName = "Josef Nový";

if (actualAge >= drinkingAgeLimit) {
  console.log(`${fullName} už může pít alkohol.`); // ? Template Literal
} else if (actualAge >= 0) {
  console.log(
    `${fullName} ještě nemůže pít alkohol, chybí mu/jí ${
      drinkingAgeLimit - actualAge
    } roky/let`
  );
} else {
  console.log("CHYBA: Neplatný věk!");
}
