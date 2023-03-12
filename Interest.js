let depositSum = Number(gets());
const interest = 1.05;

let firstYear = depositSum * interest;
let secondYear = firstYear * interest;
let thirdYear = secondYear * interest;

print(`${firstYear.toFixed(2)}
${secondYear.toFixed(2)}
${thirdYear.toFixed(2)}`);