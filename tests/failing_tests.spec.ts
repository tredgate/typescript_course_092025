import { expect } from "chai";

describe("Padající testy", () => {
  it("1 = 2", () => {
    expect(1).to.equal(2);
  });

  it.skip("Vlastní expect zpráva", () => {
    expect(1, "Moje vlastní assert zpráva").to.equal(2);
  });
});

/*
Vytvoření objektové kalkulačky (⌛10:00)
Vytvořte jednoduchou objektovou kalkulačku.
Nová složka: src/calculator
Název souboru: calculator_oop.ts

Obsah: 
class Calculator
Bez constructoru
4 metody:
add(a, b)
subtract(a, b)
multiply(a, b)
divide(a, b)
Metody vypočítají výsledek a pomocí return ho vrátí.
Výzva
V rámci dělení vyřešte dělení nulou. Pokud  budeme dělit nulou, vytvořte vyhození chyby “nelze dělit nulou”.
Dále vytvořte a otestujte metodu v kalkulačce, která bude počítat faktoriál čísla.


*/
