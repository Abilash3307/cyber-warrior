const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function checkPasswordStrength(password) {

    const weakPasswords = ["password", "123456", "12345678", "qwerty", "abc123"];

    // Check common weak passwords
    if (weakPasswords.includes(password.toLowerCase())) {
        return "Weak Password ❌";
    }

    if (password.length < 6) {
        return "Weak Password ❌";
    }

    if (password.length >= 6 && password.length < 10) {
        return "Medium Password ⚠️";
    }

    if (password.length >= 10) {
        return "Strong Password ✅";
    }
}

rl.question("Enter your password: ", function(userPassword) {
    console.log(checkPasswordStrength(userPassword));
    rl.close();
});
