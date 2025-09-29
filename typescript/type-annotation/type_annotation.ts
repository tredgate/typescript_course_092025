let appName = "Tredgate"; // ?  Typová interference (automatické přiřazení typu): string - text
let phone; // ? typová interference: any (cokoliv), protože jsme nezadali žádnou hodnotu

appName = "Eshop"; // ? Toto je ok, "Eshop" je string
// appName = 23; // ? Type error: nemůžu přiřadit number do string proměnné

phone = "Android";
phone = 777123456;

// * Typová anotace
let age: number; // ? Přiřazení datového typu pomocí typové anotace
age = 15;
// age = "Patnáct"; // ? Type Error: nemůžu přiřadit string do number proměnné
