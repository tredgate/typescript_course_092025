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

console.log("Generované heslo:", generateRandomPassword(12));
