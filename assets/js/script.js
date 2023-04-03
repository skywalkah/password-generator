// Assignment Code
var generateBtn = document.querySelector("#generate");

// Generate password function
function generatePassword() {
  let charCount = '';
  let isValid = false;
  
  // Lets declare all the possible characters to include
  var lowerCaseLetters = "abcdefghijklmnopqrstuvwxyz";
  var upperCaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var specialCharacters = "!@#$%^&*()_+-={}[]|;:<>,.?/~";
  var numbers = "0123456789";

  while (!isValid) {
    charCount = window.prompt('Choose a password length, between 8 and 128 characters');

    // If user pressed Cancel, immediately end function
    if (charCount === null) {
      return null;
    }

    // Let's check if the entry is a number
    if (!isNaN(charCount)) {

      // It is, so now let's check if the a number falls between 8 and 128
      if (charCount >= 8 && charCount <= 128) {
        // It does
        isValid = true;
      } else {
        window.alert('It must be between 8 and 128');
      }

    } else {
      window.alert('I can only accept numbers');
    }
    
    // Let's convert it to a number
    charCount = Number(charCount);
  }
  
  // Resetting isValid to use it on the next set of questions
  isValid = false;

  // Prompt the user what character types they would like to use to generate their password  
  while (!isValid) {
    // Use lowercase characters?
    var lowerCase = confirm("Do you want to include lowercase characters?");
    // Use uppercase characters?
    var upperCase = confirm("Do you want to include uppercase characters?");
    // Use numbers?
    var includeNum = confirm("Do you want to include numbers?");
    // Use special characters?
    var specialChars = confirm("Do you want to include special characters?");

    var allCharacters = '';

    // Add together the characters types depending on user input
    if (lowerCase) {allCharacters += lowerCaseLetters}
    if (upperCase) {allCharacters += upperCaseLetters}
    if (includeNum) {allCharacters += numbers}
    if (specialChars) {allCharacters += specialCharacters}

    // Let's check if at least one character was be selected
    if (lowerCase || upperCase || includeNum || specialChars) {
        isValid = true
    } else {
      // Not a single character was selected so let's ask again
      alert("At least one character type must be selected, let's try again");
    }
  }

  let password = '';

  // Generate random characters from allCharacters
  for (var i = 0; i < charCount; i++) {
    const randomIndex = Math.floor(Math.random() * allCharacters.length);
    password += allCharacters.charAt(randomIndex);
  }

  return password;
  
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button generateBtn;
generateBtn.addEventListener("click", writePassword);
