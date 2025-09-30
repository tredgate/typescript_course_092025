class Validator {
  text: string;

  constructor(text: string) {
    this.text = text;
  }

  isTooLong(maxLength: number) {
    const tooLong = this.text.length >= maxLength;
    return tooLong;
  }

  static isEmail(email: string): boolean {
    const isEmail = email.includes("@");
    return isEmail;
  }
}

const correctEmail = "petr.fifka@tredgate.cz";
const incorrectEmail = "petr.tredgate.cz";

console.log(
  `Email validace: ${correctEmail}, je email: ${Validator.isEmail(
    correctEmail
  )}`
);
console.log(
  `Email validace: ${incorrectEmail}, je email: ${Validator.isEmail(
    incorrectEmail
  )}`
);

const validator = new Validator("Hodně dlouhý text...");
console.log("Dlouhý text? " + validator.isTooLong(5));
