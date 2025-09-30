function mightFail(value: number): Promise<string> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (value < 0) {
        reject("Záporné hodnoty nejsou povoleny.");
      } else {
        resolve(`Hodnota je: ${value}`);
      }
    }, 1000);
  });
}

// Await nemůžeme použít mimo async funkci, proto vytvoříme async funkci main, ve které await použijeme.
async function main() {
  console.log("Zpracovávám hodnotu: -1...");
  mightFail(-1)
    .then((result) => {
      console.log(result);
    })
    .catch((error) => {
      console.error("Error:", error);
    });

  console.log("Zpracovávám hodnotu: 10...");
  await mightFail(10)
    .then((result) => {
      console.log(result);
    })
    .catch((error) => {
      console.error("Error:", error);
    });
}

// ? Zde zavoláme async funkci main, která obsahuje await a tedy bude čekat na vyřešení Promise.
main();

// Vytváříme samostatný modul pomocí export {}, abychom se vyvarovali duplicitně nazvaným funkcím.
export {};
