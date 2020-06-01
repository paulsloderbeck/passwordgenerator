// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Create character strings and myString

const lowerCase = 'abcdefghijklmnopqrstuvwxyz';
const upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const numbers = '0123456789';
const special = ' !"#$%&\'()*+,-./:;<=>?@[\]^_`{|}~'
let myString = "";

// Define generatePassword function
function generatePassword() {
  selectString();
  let password = "";
  for (let i = 0; i< passwordLength; i++) {
  let char = Math.floor(Math.random() * myString.length + 1);
  console.log(char);
  console.log(myString.charAt(char));
  password += myString.charAt(char);
  }
  console.log(myString);
  return password;
}

function selectString() {
  if (lowerConfirm === true && upperConfirm === false && numberConfirm === false && specialConfirm === false) {
    myString = lowerCase;
  } else if (lowerConfirm === true && upperConfirm === true && numberConfirm === false && specialConfirm === false) {
    myString = lowerCase + upperCase;
  } else if (lowerConfirm === true && upperConfirm === true && numberConfirm === true && specialConfirm === false) {
    myString = lowerCase + upperCase + numbers;
  } else if (lowerConfirm === true && upperConfirm === true && numberConfirm === true && specialConfirm === true) {
    myString = lowerCase + upperCase + numbers + special;
  } else if (lowerConfirm === false && upperConfirm === true && numberConfirm === true && specialConfirm === true) {
    myString = upperCase + numbers + special;
  } else if (lowerConfirm === false && upperConfirm === false && numberConfirm === true && specialConfirm === true) {
    myString = numbers + special;
  } else if (lowerConfirm === true && upperConfirm === false && numberConfirm === false && specialConfirm === true) {
    myString = lowerCase + special;
  } else if (lowerConfirm === false && upperConfirm === true && numberConfirm === false && specialConfirm === true) {
    myString = upperCase + special;
  } else if (lowerConfirm === false && upperConfirm === true && numberConfirm === true && specialConfirm === false) {
    myString = upperCase + numbers;
  } else if (lowerConfirm === true && upperConfirm === false && numberConfirm === true && specialConfirm === false) {
    myString = lowerCase + numbers;
  } else if (lowerConfirm === true && upperConfirm === true && numberConfirm === false && specialConfirm === true) {
    myString = lowerCase + upperCase + special;
  } else if (lowerConfirm === true && upperConfirm === false && numberConfirm === true && specialConfirm === true) {
    myString = lowerCase + numbers + special;
  } else if (lowerConfirm === false && upperConfirm === true && numberConfirm === false && specialConfirm === false) {
    myString = upperCase;
  } else if (lowerConfirm === false && upperConfirm === false && numberConfirm === true && specialConfirm === false) {
    myString = numbers;
  } else if (lowerConfirm === false && upperConfirm === false && numberConfirm === false && specialConfirm === true) {
    myString = special;}  
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Ask user for length of password
let passwordLength = prompt("How long would you like your password to be? (8-128 characters please)");
console.log("This is the password length " + passwordLength);

//Ask user for type of password characters using a series of confirm prompts
const lowerConfirm = confirm("Would you like to include Lower Case characters?");
const upperConfirm = confirm("Would you like to include Upper Case characters?");
const numberConfirm = confirm("Would you like to use numbers?");
const specialConfirm = confirm("Would you like to use special characters?");

writePassword();