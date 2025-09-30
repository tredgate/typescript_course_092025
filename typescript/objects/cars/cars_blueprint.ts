type carsColor = "Červená" | "Modrá" | "Šedá" | "Černá" | "Zelená"; // ? Vytvoření vlastního typu - jakákoliv proměnná označená touto typovou anotací může nabývat jen těch stringů, které jsou uvedené v carsColor

export class CarsBlueprint {
  color: carsColor; // ? Použití vlastního typové anotace
  engine: string;
  fuel: string;
  carName: string;
  readonly wheels = 4;

  constructor(color: carsColor, engine: string, fuel: string, carName: string) {
    this.color = color;
    this.engine = engine;
    this.fuel = fuel;
    this.carName = carName;
    console.log(
      `Auto "${carName}" bylo vyrobeno!\n\t- Motor: ${engine}\n\t- Barva: ${color}\n\t- Palivo: ${fuel}\n\t- Počet kol: ${this.wheels}`
    );
    this.logDivider();
  }

  logCarProperties() {
    console.log(
      `Informace o autě "${this.carName}": \n\t- Motor: ${this.engine}\n\t- Barva: ${this.color}\n\t- Palivo: ${this.fuel}\n\t- Počet kol: ${this.wheels}`
    );
    this.logDivider();
  }

  private logDivider() {
    console.log("-------------------------------");
  }

  repaint(newColor: carsColor) {
    const oldColor = this.color; // ? Ukládám property color do proměnné pro budoucí použití
    this.color = newColor;
    console.log(
      `Auto "${this.carName}" bylo přebarveno z: ${oldColor} na: ${newColor}`
    );
    this.logDivider();
  }

  getEngine(): string {
    console.log(`Vracím hodnotu motoru: ${this.engine} auta "${this.carName}"`);
    return this.engine;
  }
}
