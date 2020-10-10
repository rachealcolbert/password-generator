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

  var passwordLength = prompt("How many character would you like in your password? ", "8");
  passwordLength = Number.parseInt(passwordLength, 8);

  //if size is NaN, then return an error 
  if (Number.isNaN(passwordLength)) {
    alert("Invalid format! Please enter a valid number between 8 and 128.");
  }
  if (passwordLength < 8 || passwordLength > 128) {
    alert("Invalid length! Please use a number between 8 and 128.");
    return '';
  }
  console.log('passwordLength', passwordLength, typeof passwordLength);

  // confirm: lowercase, uppercase, numeric, and or special characters 
  var lowercase = prompt("Do you want your password to contain lowercase letters?");
  if (lowercase === "yes" || lowercase === "Yes") {
    lowercase = true;
  } else if (lowercase === "no" || lowercase === "No") {
    lowercase = false;
  } else {
    alert("Invalid input! Please type yes or no.");
    return '';
  }
  console.log('lowercase', lowercase, typeof lowercase);

  var uppercase = window.prompt("How about uppercase letters?");
  console.log('uppercase', uppercase, typeof uppercase);

  var numeric = window.prompt("Do you want numbers in your password?");
  console.log('numeric', numeric, typeof numeric);

  var specialCharacters = window.prompt("And would you like your password to contain special characters?");
  console.log('specialCharacter', specialCharacters, typeof specialCharacters);


  // generate a password 

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);