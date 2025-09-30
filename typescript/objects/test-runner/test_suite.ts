import { TestCase, TestStatus } from "./test_case.ts";

export class TestSuite {
  suiteName: string;
  testCases: TestCase[];

  constructor(suiteName: string) {
    this.suiteName = suiteName;
    this.testCases = [];
  }

  addTest(testCase: TestCase) {
    console.log(
      `Testovací sada: ${this.suiteName} - test přidán: ${testCase.name}`
    );
    this.testCases.push(testCase);
  }

  runAll() {
    console.log(`Testovací sada: ${this.suiteName} - spouštím všechny testy`);
    this.testCases.forEach((testCase) => {
      // ? Cyklíme pole testCases, které obsahuje testy a v každém testu spustí metodu run()
      testCase.run();
    });
  }

  filterTestsByStatus(status: TestStatus) {
    const filteredTests = this.testCases.filter(
      (testCase) => testCase.status === status
    ); // ? Metoda filter je na každé array a dokáže vyfiltrovat a vytvořit novou array prvků dle podmínky (například TestCase.status == "Passed" - vyfiltruje jen úspěšné testy a vrátí nové pole[], je prázdné pokud se ani jeden prvek nevyfiltruje
    return filteredTests;
  }

  logSummary() {
    const totalTests = this.testCases.length;
    const totalFailed = this.filterTestsByStatus("Failed").length;
    const passedTotal = this.filterTestsByStatus("Passed").length;
    const pendingTotal = this.filterTestsByStatus("Pending").length;
    const inProgressTotal = this.filterTestsByStatus("In Progress").length;

    console.log("===============");
    console.log(
      `Testovací sada: ${this.suiteName}\n\t- Celkový počet testů: ${totalTests}\n\t- Celkem úspěšných: ${passedTotal}\n\t- Celkem neuspěšných: ${totalFailed}\n\t- Spuštěno: ${inProgressTotal}\n\t- Čeká na spuštění: ${pendingTotal}`
    );
    console.log("===============");
  }
}
