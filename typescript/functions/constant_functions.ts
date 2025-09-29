// typescript/functions/constant_functions.ts
const printText = () => {
  console.log("2025-09-25 16:35 - Ahoj světe!");
};

const printTextParam = (firstTextParam: string, secondTextParam: string) => {
  console.log("2025-09-25 16:35 - " + firstTextParam);
  console.log("2025-09-25 16:40 - " + secondTextParam);
};

printText();
printTextParam("Už umíme i const funkci", "Za chvíli bude konec!");
