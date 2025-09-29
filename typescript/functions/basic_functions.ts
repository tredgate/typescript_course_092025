// typescript/functions/basic_functions.ts
function logText() {
  console.log("2025-09-25 16:35 - Ahoj světe!");
}

function LogTextParam(firstTextParam: string, secondTextParam: string) {
  console.log("2025-09-25 16:35 - " + firstTextParam);
  console.log("2025-09-25 16:40 - " + secondTextParam);
}

logText();
logText();
logText();

LogTextParam("Typescript masteři!", "Umíme funkce");
