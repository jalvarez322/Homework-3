// Assignment Code
var generateBtn = document.querySelector("#generate");


function generatePassword() {
  var length = parseInt(prompt("Enter password length (8-128 characters):"));
  if (isNaN(length) || length < 8 || length > 128) {
    alert("Invalid password length. Please enter a number between 8 and 128.");
    console.log("Selected password length: " + length);
    return "";
  }

  
  var includeLowercase = confirm("Include lowercase letters?");
  var includeUppercase = confirm("Include uppercase letters?");
  var includeNumbers = confirm("Include numbers?");
  var includeSpecialChars = confirm("Include special characters?");

  
  if (!includeLowercase && !includeUppercase && !includeNumbers && !includeSpecialChars) {
    alert("Please select at least one character type.");
    return "";
  }

  
  var lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
  var uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var numberChars = "0123456789";
  var specialChars = "!#$%&()*+,-./:;<=>?@[]^_{|}~";

  var chars = "";
  if (includeLowercase) {
    chars += lowercaseChars;
    console.log("Include lowercase letters: " + includeLowercase);
  }
  if (includeUppercase) {
    chars += uppercaseChars;
    console.log("Include uppercase letters: " + includeUppercase);
  }
  if (includeNumbers) {
    chars += numberChars;
    console.log("Include numbers: " + includeNumbers);
  }
  if (includeSpecialChars) {
    chars += specialChars;
    console.log("Include special characters: " + includeSpecialChars);
  }


  var password = "";
  for (var i = 0; i < length; i++) {
    var randomIndex = Math.floor(Math.random() * chars.length);
    password += chars.charAt(randomIndex);
  }

  
  console.log("Your generated password is: " + password);
  return password;
}


function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}


generateBtn.addEventListener("click", writePassword);
