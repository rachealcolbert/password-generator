// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword() {

  var passwordLength = window.prompt("How many character would you like in your password? ", "8");
  console.log('passwordLength', passwordLength, typeof passwordLength);

  // confirm: lowercase, uppercase, numeric, and or special characters 
  var lowercase = window.prompt("Do you want your password to contain lowercase letters?");
  console.log('lowercase', lowercase, typeof lowercase);

  var uppercase = window.prompt("How about uppercase letters?");
  console.log('uppercase', uppercase, typeof uppercase);

  var numeric = window.prompt("Do you want numbers in your password?");
  console.log('numeric', numeric, typeof numeric);

  var specialCharacters = window.prompt("And would you like your password to contain special characters?");
  console.log('specialCharacter', specialCharacters, typeof specialCharacters);


  // generate a password 



  return 5;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);