// typescript/types/types.ts

type Language = "cs" | "en" | "de" | "fr" | "es";
type Level = "beginner" | "intermediate" | "advanced";
type Tools = "Playwright" | "Cypress" | "VS Code" | "Postman";
type ProgrammingLanguage = "JavaScript" | "TypeScript" | "Java" | "Python";

type Student = {
  name: string;
  age: number;
  languages: Language[];
  level: Level;
  tools: Tools[];
  programmingLanguages: ProgrammingLanguage[];
};

function logStudentInfo(student: Student) {
  console.log("===============================");
  console.log("Student Information: ");
  console.log("===============================");
  console.log(`Name: ${student.name}`);
  console.log(`Age: ${student.age}`);
  console.log(`Languages: ${student.languages.join(", ")}`); // ? join mi z array udělá string, kde jednotlivý členové array jsou oddělení znaky v join parametru
  console.log(`Level: ${student.level}`);
  console.log(`Tools: ${student.tools.join(", ")}`);
  console.log(
    `Programming Languages: ${student.programmingLanguages.join(", ")}\n`
  );
}

const petrStudent: Student = {
  name: "Petr Novák",
  age: 25,
  languages: ["cs", "en"],
  level: "beginner",
  tools: ["Playwright", "VS Code"],
  programmingLanguages: ["TypeScript"],
};

const annaStudent: Student = {
  name: "Anna Novotná",
  age: 30,
  languages: ["en", "fr", "cs"],
  level: "advanced",
  tools: ["Playwright", "Cypress", "VS Code"],
  programmingLanguages: ["Java", "JavaScript", "TypeScript"],
};

logStudentInfo(petrStudent);
logStudentInfo(annaStudent);
