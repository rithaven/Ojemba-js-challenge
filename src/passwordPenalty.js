
/**
 * Calculates the sum of penalty points for a given password.
 * Double characters like `aa` count as 1 penalty point, triples and more are 2 points.
 * It returns the sum of penalty points for a password or 0.
 * @param {string} password
 * @returns {number}
 */
export default function penaltyPoints(password = "") {

  // If the password is empty or equals to null, return 0 (no penalty points)
  if (!password) return 0;
  
  // Ensure the password is a string by converting it if necessary
  if (typeof password !== "string") password = String(password);


  // Check for consecutive duplicate numbers in the password
  const duplicateNum = password.match(/(\d)\1+/);

    // Check for consecutive duplicate letters in the password
  const duplicateLetters = password.match(/(\w)\1+/);

  // Count the length of the first consecutive duplicate numbers, if any
  let repeatedChar = duplicateNum ? duplicateNum[0].length : 0;

    // Add the length of the first consecutive duplicate letters, if any, to repeatedChar
  repeatedChar += duplicateLetters ? duplicateLetters[0].length : 0;

  // If there are no repeated characters, return 0. 
  // If there are 1 or 2 repeated characters, return 1.
  // If there are more than 2 repeated characters, return 2.
  return repeatedChar === 0 ? 0 : repeatedChar <= 2 ? 1 : 2;
}