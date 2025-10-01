import { expect } from "chai";
import { TestCase } from "../typescript/objects/test-runner/test_case.ts";
import type { TestStatus } from "../typescript/objects/test-runner/test_case.ts";
import { TestSuite } from "../typescript/objects/test-runner/test_suite.ts";

describe.skip("TestCase", () => {
  describe("Constructor", () => {
    it("should create a TestCase with given name and Pending status", () => {
      const testName = "Sample test";
      const testCase = new TestCase(testName);

      expect(testCase.name).to.equal(testName);
      expect(testCase.status).to.equal("Pending");
    });

    it("should create a TestCase with readonly name property", () => {
      const testCase = new TestCase("Test name");

      // TypeScript will prevent this at compile time, but we can verify the property exists
      expect(testCase.name).to.be.a("string");
      expect(testCase).to.have.property("name");
    });
  });

  describe("run()", () => {
    it("should change status to 'In Progress' when run() is called", () => {
      const testCase = new TestCase("Test run method");

      testCase.run();

      expect(testCase.status).to.equal("In Progress");
    });

    it("should log correct message when run() is called", () => {
      const testCase = new TestCase("Test logging");
      const consoleSpy: string[] = [];
      const originalLog = console.log;

      // Mock console.log to capture output
      console.log = (...args) => {
        consoleSpy.push(args.join(" "));
      };

      testCase.run();

      // Restore original console.log
      console.log = originalLog;

      expect(consoleSpy).to.include("Spuštěn test: Test logging");
    });
  });

  describe("pass()", () => {
    it("should change status to 'Passed' when pass() is called", () => {
      const testCase = new TestCase("Test pass method");

      testCase.pass();

      expect(testCase.status).to.equal("Passed");
    });

    it("should log success message when pass() is called", () => {
      const testCase = new TestCase("Test pass logging");
      const consoleSpy: string[] = [];
      const originalLog = console.log;

      console.log = (...args) => {
        consoleSpy.push(args.join(" "));
      };

      testCase.pass();

      console.log = originalLog;

      expect(consoleSpy).to.include("✅ Test úspěšný: Test pass logging");
    });

    it("should be able to pass a test that was previously run", () => {
      const testCase = new TestCase("Test run then pass");

      testCase.run();
      expect(testCase.status).to.equal("In Progress");

      testCase.pass();
      expect(testCase.status).to.equal("Passed");
    });
  });

  describe("fail()", () => {
    it("should change status to 'Failed' when fail() is called", () => {
      const testCase = new TestCase("Test fail method");

      testCase.fail();

      expect(testCase.status).to.equal("Failed");
    });

    it("should log failure message when fail() is called", () => {
      const testCase = new TestCase("Test fail logging");
      const consoleSpy: string[] = [];
      const originalLog = console.log;

      console.log = (...args) => {
        consoleSpy.push(args.join(" "));
      };

      testCase.fail();

      console.log = originalLog;

      expect(consoleSpy).to.include("❌ Test neúspěšný: Test fail logging");
    });

    it("should be able to fail a test that was previously run", () => {
      const testCase = new TestCase("Test run then fail");

      testCase.run();
      expect(testCase.status).to.equal("In Progress");

      testCase.fail();
      expect(testCase.status).to.equal("Failed");
    });
  });

  describe("Status transitions", () => {
    it("should allow status transitions from Pending to any other status", () => {
      const testCase1 = new TestCase("Test 1");
      const testCase2 = new TestCase("Test 2");
      const testCase3 = new TestCase("Test 3");

      testCase1.run();
      expect(testCase1.status).to.equal("In Progress");

      testCase2.pass();
      expect(testCase2.status).to.equal("Passed");

      testCase3.fail();
      expect(testCase3.status).to.equal("Failed");
    });

    it("should allow overriding status multiple times", () => {
      const testCase = new TestCase("Status override test");

      testCase.run();
      expect(testCase.status).to.equal("In Progress");

      testCase.fail();
      expect(testCase.status).to.equal("Failed");

      testCase.pass();
      expect(testCase.status).to.equal("Passed");

      testCase.run();
      expect(testCase.status).to.equal("In Progress");
    });
  });
});

describe.skip("TestSuite", () => {
  describe("Constructor", () => {
    it("should create a TestSuite with given name and empty testCases array", () => {
      const suiteName = "Sample Test Suite";
      const testSuite = new TestSuite(suiteName);

      expect(testSuite.suiteName).to.equal(suiteName);
      expect(testSuite.testCases).to.be.an("array");
      expect(testSuite.testCases).to.have.length(0);
    });
  });

  describe("addTest()", () => {
    it("should add a test case to the testCases array", () => {
      const testSuite = new TestSuite("Test Suite");
      const testCase = new TestCase("Test Case");

      testSuite.addTest(testCase);

      expect(testSuite.testCases).to.have.length(1);
      expect(testSuite.testCases[0]).to.equal(testCase);
    });

    it("should add multiple test cases maintaining order", () => {
      const testSuite = new TestSuite("Test Suite");
      const testCase1 = new TestCase("Test Case 1");
      const testCase2 = new TestCase("Test Case 2");
      const testCase3 = new TestCase("Test Case 3");

      testSuite.addTest(testCase1);
      testSuite.addTest(testCase2);
      testSuite.addTest(testCase3);

      expect(testSuite.testCases).to.have.length(3);
      expect(testSuite.testCases[0]).to.equal(testCase1);
      expect(testSuite.testCases[1]).to.equal(testCase2);
      expect(testSuite.testCases[2]).to.equal(testCase3);
    });

    it("should log correct message when adding a test", () => {
      const testSuite = new TestSuite("Logging Test Suite");
      const testCase = new TestCase("Logging Test Case");
      const consoleSpy: string[] = [];
      const originalLog = console.log;

      console.log = (...args) => {
        consoleSpy.push(args.join(" "));
      };

      testSuite.addTest(testCase);

      console.log = originalLog;

      expect(consoleSpy).to.include(
        "Testovací sada: Logging Test Suite - test přidán: Logging Test Case"
      );
    });
  });

  describe("runAll()", () => {
    it("should call run() on all test cases", () => {
      const testSuite = new TestSuite("Run All Test Suite");
      const testCase1 = new TestCase("Test Case 1");
      const testCase2 = new TestCase("Test Case 2");
      const testCase3 = new TestCase("Test Case 3");

      testSuite.addTest(testCase1);
      testSuite.addTest(testCase2);
      testSuite.addTest(testCase3);

      testSuite.runAll();

      expect(testCase1.status).to.equal("In Progress");
      expect(testCase2.status).to.equal("In Progress");
      expect(testCase3.status).to.equal("In Progress");
    });

    it("should work with empty test suite", () => {
      const testSuite = new TestSuite("Empty Test Suite");

      // Should not throw an error
      expect(() => testSuite.runAll()).to.not.throw();
    });

    it("should log correct message when running all tests", () => {
      const testSuite = new TestSuite("Logging Run All");
      const consoleSpy: string[] = [];
      const originalLog = console.log;

      console.log = (...args) => {
        consoleSpy.push(args.join(" "));
      };

      testSuite.runAll();

      console.log = originalLog;

      expect(consoleSpy).to.include(
        "Testovací sada: Logging Run All - spouštím všechny testy"
      );
    });
  });

  describe("filterTestsByStatus()", () => {
    let testSuite: TestSuite;
    let pendingTest: TestCase;
    let passedTest: TestCase;
    let failedTest: TestCase;
    let inProgressTest: TestCase;

    beforeEach(() => {
      testSuite = new TestSuite("Filter Test Suite");
      pendingTest = new TestCase("Pending Test");
      passedTest = new TestCase("Passed Test");
      failedTest = new TestCase("Failed Test");
      inProgressTest = new TestCase("In Progress Test");

      testSuite.addTest(pendingTest);
      testSuite.addTest(passedTest);
      testSuite.addTest(failedTest);
      testSuite.addTest(inProgressTest);

      // Set different statuses
      passedTest.pass();
      failedTest.fail();
      inProgressTest.run();
    });

    it("should filter tests by 'Pending' status", () => {
      const pendingTests = testSuite.filterTestsByStatus("Pending");

      expect(pendingTests).to.have.length(1);
      expect(pendingTests[0]).to.equal(pendingTest);
    });

    it("should filter tests by 'Passed' status", () => {
      const passedTests = testSuite.filterTestsByStatus("Passed");

      expect(passedTests).to.have.length(1);
      expect(passedTests[0]).to.equal(passedTest);
    });

    it("should filter tests by 'Failed' status", () => {
      const failedTests = testSuite.filterTestsByStatus("Failed");

      expect(failedTests).to.have.length(1);
      expect(failedTests[0]).to.equal(failedTest);
    });

    it("should filter tests by 'In Progress' status", () => {
      const inProgressTests = testSuite.filterTestsByStatus("In Progress");

      expect(inProgressTests).to.have.length(1);
      expect(inProgressTests[0]).to.equal(inProgressTest);
    });

    it("should return empty array when no tests match status", () => {
      const emptyTestSuite = new TestSuite("Empty Suite");
      const result = emptyTestSuite.filterTestsByStatus("Passed");

      expect(result).to.be.an("array");
      expect(result).to.have.length(0);
    });

    it("should return multiple tests with same status", () => {
      const multiTestSuite = new TestSuite("Multi Status Suite");
      const passedTest1 = new TestCase("Passed Test 1");
      const passedTest2 = new TestCase("Passed Test 2");
      const failedTest1 = new TestCase("Failed Test 1");

      multiTestSuite.addTest(passedTest1);
      multiTestSuite.addTest(passedTest2);
      multiTestSuite.addTest(failedTest1);

      passedTest1.pass();
      passedTest2.pass();
      failedTest1.fail();

      const passedTests = multiTestSuite.filterTestsByStatus("Passed");
      expect(passedTests).to.have.length(2);
      expect(passedTests).to.include(passedTest1);
      expect(passedTests).to.include(passedTest2);
    });
  });

  describe("logSummary()", () => {
    it("should correctly calculate and display test statistics", () => {
      const testSuite = new TestSuite("Summary Test Suite");
      const pendingTest = new TestCase("Pending Test");
      const passedTest1 = new TestCase("Passed Test 1");
      const passedTest2 = new TestCase("Passed Test 2");
      const failedTest = new TestCase("Failed Test");
      const inProgressTest = new TestCase("In Progress Test");

      testSuite.addTest(pendingTest);
      testSuite.addTest(passedTest1);
      testSuite.addTest(passedTest2);
      testSuite.addTest(failedTest);
      testSuite.addTest(inProgressTest);

      passedTest1.pass();
      passedTest2.pass();
      failedTest.fail();
      inProgressTest.run();

      const consoleSpy: string[] = [];
      const originalLog = console.log;

      console.log = (...args) => {
        consoleSpy.push(args.join(" "));
      };

      testSuite.logSummary();

      console.log = originalLog;

      // Check if the summary contains expected information
      const summaryOutput = consoleSpy.join("\n");
      expect(summaryOutput).to.include("Summary Test Suite");
      expect(summaryOutput).to.include("Celkový počet testů: 5");
      expect(summaryOutput).to.include("Celkem úspěšných: 2");
      expect(summaryOutput).to.include("Celkem neuspěšných: 1");
      expect(summaryOutput).to.include("Spuštěno: 1");
      expect(summaryOutput).to.include("Čeká na spuštění: 1");
    });

    it("should handle empty test suite", () => {
      const testSuite = new TestSuite("Empty Summary Suite");
      const consoleSpy: string[] = [];
      const originalLog = console.log;

      console.log = (...args) => {
        consoleSpy.push(args.join(" "));
      };

      testSuite.logSummary();

      console.log = originalLog;

      const summaryOutput = consoleSpy.join("\n");
      expect(summaryOutput).to.include("Celkový počet testů: 0");
      expect(summaryOutput).to.include("Celkem úspěšných: 0");
      expect(summaryOutput).to.include("Celkem neuspěšných: 0");
      expect(summaryOutput).to.include("Spuštěno: 0");
      expect(summaryOutput).to.include("Čeká na spuštění: 0");
    });

    it("should display separator lines", () => {
      const testSuite = new TestSuite("Separator Test Suite");
      const consoleSpy: string[] = [];
      const originalLog = console.log;

      console.log = (...args) => {
        consoleSpy.push(args.join(" "));
      };

      testSuite.logSummary();

      console.log = originalLog;

      expect(consoleSpy).to.include("===============");
      // Should appear twice (beginning and end)
      const separatorCount = consoleSpy.filter(
        (line) => line === "==============="
      ).length;
      expect(separatorCount).to.equal(2);
    });
  });
});

describe.skip("Integration Tests", () => {
  describe("TestSuite with TestCase integration", () => {
    it("should handle a complete test workflow", () => {
      const testSuite = new TestSuite("Integration Test Suite");
      const loginTest = new TestCase("Login Test");
      const logoutTest = new TestCase("Logout Test");
      const profileTest = new TestCase("Profile Test");

      // Add tests to suite
      testSuite.addTest(loginTest);
      testSuite.addTest(logoutTest);
      testSuite.addTest(profileTest);

      expect(testSuite.testCases).to.have.length(3);

      // Run all tests
      testSuite.runAll();

      // All should be in progress
      expect(loginTest.status).to.equal("In Progress");
      expect(logoutTest.status).to.equal("In Progress");
      expect(profileTest.status).to.equal("In Progress");

      // Set final results
      loginTest.pass();
      logoutTest.pass();
      profileTest.fail();

      // Verify filtering works correctly
      const passedTests = testSuite.filterTestsByStatus("Passed");
      const failedTests = testSuite.filterTestsByStatus("Failed");
      const inProgressTests = testSuite.filterTestsByStatus("In Progress");

      expect(passedTests).to.have.length(2);
      expect(failedTests).to.have.length(1);
      expect(inProgressTests).to.have.length(0);
    });

    it("should handle duplicate test names correctly", () => {
      const testSuite = new TestSuite("Duplicate Names Suite");
      const test1 = new TestCase("Same Name");
      const test2 = new TestCase("Same Name");

      testSuite.addTest(test1);
      testSuite.addTest(test2);

      expect(testSuite.testCases).to.have.length(2);
      expect(testSuite.testCases[0]).to.equal(test1);
      expect(testSuite.testCases[1]).to.equal(test2);

      // Different instances should be able to have different statuses
      test1.pass();
      test2.fail();

      expect(test1.status).to.equal("Passed");
      expect(test2.status).to.equal("Failed");
    });

    it("should handle large number of tests", () => {
      const testSuite = new TestSuite("Large Test Suite");
      const testCount = 100;
      const testCases = [];

      // Create and add many test cases
      for (let i = 0; i < testCount; i++) {
        const testCase = new TestCase(`Test ${i}`);
        testCases.push(testCase);
        testSuite.addTest(testCase);
      }

      expect(testSuite.testCases).to.have.length(testCount);

      // Run all tests
      testSuite.runAll();

      // Verify all are in progress
      testCases.forEach((testCase) => {
        expect(testCase.status).to.equal("In Progress");
      });

      // Set various statuses
      testCases.slice(0, 50).forEach((testCase) => testCase.pass());
      testCases.slice(50, 75).forEach((testCase) => testCase.fail());
      // Leave remaining 25 in "In Progress"

      // Verify filtering
      expect(testSuite.filterTestsByStatus("Passed")).to.have.length(50);
      expect(testSuite.filterTestsByStatus("Failed")).to.have.length(25);
      expect(testSuite.filterTestsByStatus("In Progress")).to.have.length(25);
      expect(testSuite.filterTestsByStatus("Pending")).to.have.length(0);
    });
  });

  describe("TypeScript type safety tests", () => {
    it("should enforce TestStatus type safety", () => {
      const testCase = new TestCase("Type Safety Test");

      // These should be valid assignments
      const validStatuses: TestStatus[] = [
        "Pending",
        "Passed",
        "Failed",
        "In Progress",
      ];

      validStatuses.forEach((status) => {
        testCase.status = status;
        expect(testCase.status).to.equal(status);
      });
    });

    it("should maintain readonly property for test name", () => {
      const testCase = new TestCase("Readonly Test");

      // The name should be accessible but readonly
      expect(testCase.name).to.equal("Readonly Test");
      expect(testCase).to.have.property("name");
    });
  });
});
