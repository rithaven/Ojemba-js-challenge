export const forbiddenPasswords = ["amG84h6yeQ", "mc9Q20pdjH", "jnT6Q2f8U5"];

/**
 * Checks if a given password is valid or invalid.
 * If valid it returns true, otherwise false
 * @param {string} password
 * @returns {boolean}
 */
function checkSequence(numbers) {
  // Convert the input string to an array, sort it, and check if there are any consecutive numbers
  return [...numbers]
    .sort()
    .some((number, index, arr) => +number + 1 == arr[index + 1]);
}

// Export the isValidPassword function as the default export of the module
export default function isValidPassword(password = "") {
  // Check if the password length is not equal to 10
  if (password.length !== 10) return false;

  // Check if the password is present in the forbiddenPasswords array
  if (forbiddenPasswords.includes(password)) return false;

  // Check if the password contains any non-alphanumeric characters
  if (/\W/.test(password)) return false;

  // Check if the password consists of only digits
  if (/^[0-9]+$/.test(password)) return false;

  // Check if the password consists of only letters
  if (/^[A-Za-z]+$/.test(password)) return false;

  // Check if the password is either all uppercase or all lowercase
  if (
    password.toUpperCase() === password ||
    password.toLowerCase() === password
  )
    return false;

  // Extract all numbers from the password and check if there are any consecutive numbers
  const arrNumbers = password.match(/\d+/g);
  if (arrNumbers.some((number) => checkSequence(number))) return false;

  // Create a set of unique characters from the password and check if there are at least 4 distinct characters
  const setOfPassword = new Set([...password]);
  if (setOfPassword.size < 4) return false;

  return true;
}