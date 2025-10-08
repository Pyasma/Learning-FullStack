let passFirst = document.getElementById("pass-first");
let passSecond = document.getElementById("pass-second");

function randompass() {
    let chars =
        "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let passwordLength = 15;
    let password = "";
    let password2 = "";
    
    for (let i = 0; i <= passwordLength; i++) {
        let randomNumber = Math.floor(Math.random() * chars.length);
        password += chars.substring(randomNumber, randomNumber + 1);
    }
    for (let j = 0; j <= passwordLength; j++) {
        let randomNumber2 = Math.floor(Math.random() * chars.length);
        password2 += chars.substring(randomNumber2, randomNumber2 + 1);
    }
    passFirst.textContent = password;
    passSecond.textContent = password2;
}