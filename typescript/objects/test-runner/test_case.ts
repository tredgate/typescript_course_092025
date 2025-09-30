export type TestStatus = "Pending" | "Passed" | "Failed" | "In Progress";

export class TestCase {
  readonly name: string;
  status: TestStatus;

  constructor(name: string) {
    this.name = name;
    this.status = "Pending";
  }

  run() {
    console.log(`Spuštěn test: ${this.name}`);
    this.status = "In Progress";
  }

  pass() {
    console.log(`✅ Test úspěšný: ${this.name}`);
    this.status = "Passed";
  }

  fail() {
    console.log(`❌ Test neúspěšný: ${this.name}`);
    this.status = "Failed";
  }
}
