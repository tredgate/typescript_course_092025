const testUser = {
  username: "petr.fifka",
  age: 28,
  email: "petr.fifka@tredgate.cz",
};

function registerUser(userData: any) {
  console.log("==INFORMACE O UŽIVATELI==");
  console.log(`Uživatelské jméno: ${userData.username}`);
  console.log(`Věk: ${userData.age}`);
  console.log(`Email: ${userData.email}`);
}

registerUser(testUser);
