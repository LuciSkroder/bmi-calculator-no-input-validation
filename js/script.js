"use script";

let height = parseInt(prompt(`Please enter your height in centimeters`))
let weight = parseInt(prompt(`Please enter your weight in kilos with no decimals`))

if (height <= 0 && weight <= 0) {
    alert(`Invalid input, please try again`)
}

console.log(height)
console.log(weight)

let bmi = Math.floor(weight / (height/100)**2)
console.log(bmi)

if (bmi <= 16) {
    alert(`Your bmi is ${bmi}, you are: Severely underweight`);
}
else if (bmi > 16 && bmi <= 18) {
    alert(`Your bmi is ${bmi}, you are: Underweight`);
}
else if (bmi > 18 && bmi <= 25) {
    alert(`Your bmi is ${bmi}, you are: Normal weight`);
}
else if (bmi > 25 && bmi <= 30) {
    alert(`Your bmi is ${bmi}, you are: Overweight`);
}
else if (bmi > 30 && bmi <= 35) {
    alert(`Your bmi is ${bmi}, you are: Moderately obese`);
}
else if (bmi > 35 && bmi <= 40) {
    alert(`Your bmi is ${bmi}, you are: Severely obese`);
}
else if (bmi > 40) {
    alert(`Your bmi is ${bmi}, you are: Morbidly obese`);
}
else {
    alert(`Something went wrong, please try again`)
}