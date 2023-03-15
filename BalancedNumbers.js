let sum = 0;
while (true) {
    let currentNumber = gets(); 
    let firstDigit = Number(currentNumber[0]);
    let secondDigit = Number(currentNumber[1]);
    let thirdDigit = Number(currentNumber[2]);

    if (secondDigit === firstDigit + thirdDigit) {
        sum += Number(currentNumber);
    } else {
        break;
    }
}

print(sum);