//typescript/objects/cars/cars.ts

import { CarsBlueprint } from "./cars_blueprint.ts";

const dieselCar = new CarsBlueprint("Zelená", "1.6 TDI", "Diesel", "Ropák");
dieselCar.logCarProperties();
const petrolCar = new CarsBlueprint(
  "Červená",
  "1.0 TSI",
  "Benzín",
  "Červené Auto"
);
petrolCar.logCarProperties();
dieselCar.color = "Šedá";
dieselCar.logCarProperties(); // * Barva by měla být šedá
petrolCar.logCarProperties(); // * Barva by měla zůstat červená

const electricCar = new CarsBlueprint(
  "Černá",
  "EV 160kW",
  "Elektřina",
  "Blesk"
);
electricCar.logCarProperties();
dieselCar.repaint("Modrá");
dieselCar.logCarProperties();

const dieselCarEngine = dieselCar.getEngine();
console.log("Motor ropáka: " + dieselCarEngine);
