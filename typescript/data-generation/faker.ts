// import { faker } from "@faker-js/faker";
import { fakerCS_CZ as faker } from "@faker-js/faker";

const firstName = faker.person.firstName("female");
const lastName = faker.person.lastName("female");
const username = faker.internet.username({ firstName, lastName });
const email = faker.internet.email({
  firstName,
  lastName,
  provider: "seznam.cz",
});

console.log(`firstName: ${firstName}`);
console.log(`lastName: ${lastName}`);
console.log(`username: ${username}`);
console.log(`email: ${email}`);

// ? Object literal může být vytvořený i pouze pomocí proměnné, následně se název proměnné použije jako název property
// const someObject = {
//   firstName,
// };
// const someObject2 = {
//   firstName: firstName,
// };
// ? Oba object literals výše jsou stejné (someObject = zkrácený tvar)
