// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Define generatePassword function
function generatePassword() {
  let password = "";
  for (let i = 0; i< passwordLength; i++) {
  let char = Math.floor(Math.random() * lowerCase.length + 1);
  console.log(char);
  console.log(lowerCase.charAt(char));
  password += lowerCase.charAt(char);
  }
  return password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Create character strings

const lowerCase = 'abcdefghijklmnopqrstuvwxyz'
const upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
const numbers = '0123456789'
//const specialChar = ' !"#$%&\'()*+,-./:;<=>?@[\]^_`{|}~'

// Ask user for length of password
let passwordLength = prompt("How long would you like your password to be? (8-128 characters please)");
console.log("This is the password length " + passwordLength);


writePassword();