import { TestCase } from "./test_case.ts";
import { TestSuite } from "./test_suite.ts";

// * Vytvoření testů
const validLoginTest = new TestCase("Úspěšné přihlášení do aplikace");
const invalidLoginTest = new TestCase("Neúspěšné přihlášení do aplikace");
const lostPasswordTest = new TestCase("Reset ztraceného hesla");
const nonexistingUserTest = new TestCase(
  "Přihlášení s neexistujícím uživatelem"
);
const accessibilityTest = new TestCase("Testování přístupnosti přihlášení");

// * Vytvoření testovací sady
const testSuite = new TestSuite("Testy na přihlašovací stránku");

// * Přidání testů do testSuite
testSuite.addTest(validLoginTest);
testSuite.addTest(invalidLoginTest);
testSuite.addTest(lostPasswordTest);
testSuite.addTest(nonexistingUserTest);
testSuite.addTest(accessibilityTest);

// * Spuštění všech testů
testSuite.runAll();

// * Řízení jednotlivých testů
validLoginTest.pass();
invalidLoginTest.fail();
accessibilityTest.pass();

// * Výsledky
testSuite.logSummary();

// ? Vypíše: Obsah testovací sady[object Object]
console.log("Obsah testovací sady: " + testSuite);
// ? Pro výpis celého objektu můžeme použít JSON.stringify()
console.log("Obsah testovací sady: " + JSON.stringify(testSuite, null, 2));
