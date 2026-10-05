const readline = require("readline-sync");

let password;
let hasUppercase;
let hasNumber;
let isLongEnough;
let isValid;

do {
    password = readline.question("Please enter a password: ");

    hasUppercase = false;
    hasNumber = false;
    isLongEnough = password.length >= 8;

    for (let i = 0; i < password.length; i++) {

        // Check for uppercase letter
        if (
            password[i] >= "A" &&
            password[i] <= "Z"
        ) {
            hasUppercase = true;
        }

        // Check for number
        if (
            password[i] >= "0" &&
            password[i] <= "9"
        ) {
            hasNumber = true;
        }
    }

    isValid = isLongEnough && hasUppercase && hasNumber;

    if (!isValid) {
        console.log("Your password does not meet the requirements. Please try again.");
    }

} while (!isValid);

console.log("Your password meets all requirements. Success!");
