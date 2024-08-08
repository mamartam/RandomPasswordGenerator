const passwordBox = document.getElementById("password");
const lenght = 12;

const upperCase = "ABCDEFGHIGKLMNOPQRSTUVWXYWZ";
const lowerCase = "abcdefghigklmnopqrstuvwxyz";
const numbers = "0123456789";
const symbols = "@#$%^&()_+~|}{[]><-+";

const allCharts = upperCase + lowerCase + numbers + symbols;

function generateRandomPassword() {
    let password = "";
    password += upperCase[Math.floor(Math.random() * upperCase.length)];
    password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
    password += numbers[Math.floor(Math.random() * numbers.length)];
    password += symbols[Math.floor(Math.random() * symbols.length)];
    while (lenght > password.length) {
        password += allCharts[Math.floor(Math.random() * allCharts.length)];
    }
    passwordBox.value = password;

}

function copyPassword(){
    passwordBox.select();
    document.execCommand("copy");
}

