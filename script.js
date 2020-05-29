// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Create character strings

const lowerCase = 'abcdefghijklmnopqrstuvwxyz'
const upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
const numbers = '0123456789'
//const specialChar = ' !"#$%&\'()*+,-./:;<=>?@[\]^_`{|}~'

// Define generatePassword function
function generatePassword() {
  //let length = 1;
  let password = "";
  let char = Math.floor(Math.random() * lowerCase.length);
  console.log(char);
  console.log(lowerCase.charAt(char));
  password = lowerCase.charAt(char);
  return password;
}
generatePassword();
writePassword();