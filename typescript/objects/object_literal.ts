const testUser = {
  username: "petr.fifka",
  age: 28,
  email: "petr.fifka@tredgate.cz",
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function registerUser(userData: any) {
  // ! Použití any není doporučeno (rizikové), použili jsme, protože v tuto chvíli jsme neznali typy
  console.log("==INFORMACE O UŽIVATELI==");
  console.log(`Uživatelské jméno: ${userData.username}`);
  console.log(`Věk: ${userData.age}`);
  console.log(`Email: ${userData.email}`);
}

registerUser(testUser);
