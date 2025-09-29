function add(a: number, b: number) {
  const result = a + b;
  console.log(`${a} + ${b} = ${result}`);
}

function subtract(a: number, b: number) {
  const result = a - b;
  console.log(`${a} - ${b} = ${result}`);
}

const multiple = (a: number, b: number) => {
  const result = a * b;
  console.log(`${a} * ${b} = ${result}`);
};

const divide = (a: number, b: number) => {
  const result = a / b;
  console.log(`${a} / ${b} = ${result}`);
};

add(15, 48);
subtract(98, 41);
multiple(54, 30);
divide(88, 6);
