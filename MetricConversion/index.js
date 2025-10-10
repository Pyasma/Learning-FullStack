let valueElL = document.getElementById("value-l");
let valueElV = document.getElementById("value-V");
let valueElM = document.getElementById("value-M");
let inputEl = document.getElementById("input-el");
let btnEl = document.getElementById("btn-el");

btnEl.addEventListener("click", function() {
    convert();
    }
)


function convert() {
    valueElL.innerHTML = `${inputEl.value} meters = ${(Number(inputEl.value) * 3.281).toFixed(3)} feet | ${inputEl.value} feet = ${(inputEl.value / 3.281).toFixed(3)} meters`;
    valueElV.innerHTML = `${inputEl.value} liters = ${(Number(inputEl.value) * 0.264).toFixed(3)} gallons | ${inputEl.value} gallons = ${(inputEl.value / 0.264).toFixed(3)} liters`;
    valueElM.innerHTML = `${inputEl.value} kilos = ${(Number(inputEl.value) * 2.204).toFixed(3)} pounds | ${inputEl.value} pounds = ${(inputEl.value / 2.204).toFixed(3)} kilos`;
}