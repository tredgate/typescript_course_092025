/**
 * Generates a random password string of a specified length.
 *
 * The password will contain uppercase and lowercase letters, numbers, and special characters.
 * If no length is provided, the default password length is 12 characters.
 *
 * @param length - The desired length of the generated password. Defaults to 12.
 * @returns A randomly generated password string.
 *
 * @example
 * // Generate a password with the default length (12 characters)
 * const password = generateRandomPassword();
 * console.log(password); // Example output: "aB3!xYz9@Qw2"
 *
 * @example
 * // Generate a password with a custom length
 * const shortPassword = generateRandomPassword(6);
 * console.log(shortPassword); // Example output: "A1b@9z"
 */
function generateRandomPassword(length: number = 12): string {
  const chars =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+[]{}|;:,.<>?";
  let password = "";
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * chars.length);
    password += chars[randomIndex];
  }
  return password;
}

/**
 * Generates a random username string of a specified length.
 *
 * The username will contain lowercase letters and numbers.
 * If no length is provided, the default username length is 8 characters.
 *
 * @param length - The desired length of the generated username. Defaults to 8.
 * @returns A randomly generated username string.
 */
function generateRandomUsername(length: number = 8): string {
  const chars = "abcdefghijklmnopqrstuvwxyz0123456789";
  let username = "";
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * chars.length);
    username += chars[randomIndex];
  }
  return username;
}

console.log("Generované heslo:", generateRandomPassword(12));

console.log("Generované uživatelské jméno:", generateRandomUsername(8));

/**
 * Generates a random first name based on the specified gender.
 *
 * @param gender - The gender for which to generate a name. Can be "male", "female", or "other". Defaults to "other".
 * @returns A randomly selected first name corresponding to the specified gender.
 *
 * @example
 * // Returns a random male name, e.g., "John"
 * const name = generateFirstName("male");
 *
 * @example
 * // Returns a random female name, e.g., "Mary"
 * const name = generateFirstName("female");
 *
 * @example
 * // Returns a random name from the "other" category, e.g., "Alex"
 * const name = generateFirstName();
 */
function generateFirstName(
  gender: "male" | "female" | "other" = "other"
): string {
  const maleNames = ["John", "Michael", "David", "James", "Robert"];
  const femaleNames = ["Mary", "Jennifer", "Linda", "Patricia", "Elizabeth"];
  const otherNames = ["Alex", "Taylor", "Jordan", "Casey", "Morgan"];

  switch (gender) {
    case "male":
      return maleNames[Math.floor(Math.random() * maleNames.length)];
    case "female":
      return femaleNames[Math.floor(Math.random() * femaleNames.length)];
    default:
      return otherNames[Math.floor(Math.random() * otherNames.length)];
  }
}

/**
 * Generates a random last name (surname).
 *
 * @returns A randomly selected last name from a predefined list of common surnames.
 *
 * @example
 * // Returns a random last name, e.g., "Smith"
 * const lastName = generateLastName();
 */
function generateLastName(): string {
  const lastNames = [
    "Smith",
    "Johnson",
    "Williams",
    "Brown",
    "Jones",
    "Garcia",
    "Miller",
    "Davis",
    "Rodriguez",
    "Martinez",
    "Hernandez",
    "Lopez",
    "Gonzalez",
    "Wilson",
    "Anderson",
    "Thomas",
    "Taylor",
    "Moore",
    "Jackson",
    "Martin",
  ];

  return lastNames[Math.floor(Math.random() * lastNames.length)];
}

console.log(generateFirstName() + " " + generateLastName());
