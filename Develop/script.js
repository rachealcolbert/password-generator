// Assignment code here
var allDigits = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var nonZeroDigits = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
var lowercaseDigits = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var uppercaseDigits = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var characters = ['@', '#', '$', '%', '<', '!', '<', '?'];

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword() {

  var passwordLength = prompt("How many character would you like in your password? ", "8");
  passwordLength = Number.parseInt(passwordLength, 10);
  console.log('passwordLength', passwordLength, typeof passwordLength);
  //if size is NaN, then return an error 
  if (Number.isNaN(passwordLength)) {
    alert("Invalid format! Please enter a valid number between 8 and 128.");
    return '';
  }
  if (passwordLength < 8 || passwordLength > 128) {
    alert("Invalid length! Please use a number between 8 and 128.");
    return '';
  }
  var lowercase = confirm("Do you want your password to contain lowercase letters? Press OK to add lowercase letters to your password. Press CANCEL if you don't want lowercase letters in your password.");
  console.log('lowercase', lowercase, typeof lowercase);

  var uppercase = confirm("How about uppercase letters? Press OK to add uppercase letters to your password. Press CANCEL if you don't want uppercase letters in your password.");
  console.log('uppercase', uppercase, typeof uppercase);

  var numeric = confirm("Do you want numbers in your password? Press OK to add numbers and CANCEL to exclude numbers.");
  console.log('numeric', numeric, typeof numeric);

  var specialCharacters = confirm("And would you like your password to contain special characters? Press OK to add special characters and CANCEL to exclude them.");
  console.log('specialCharacter', specialCharacters, typeof specialCharacters);


  var randomPassword = [];

  if (lowercase = true) {
    randomPassword = randomPassword + lowercaseDigits.concat(lowercase);
  }
  if (uppercase = true) {
    randomPassword = randomPassword + uppercaseDigits.concat(uppercase);
  }
  if (numeric = true) {
    randomPassword = randomPassword + nonZeroDigits.concat(numeric);
  }
  if (specialCharacters = true) {
    randomPassword = randomPassword + characters.concat(specialCharacters);
  }

  return randomPassword
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);