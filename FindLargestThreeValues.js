let numberCounts = Number(gets());
let largest = -500;
let secondLargest = -500;
let thirdLargest = -500;


for (let i = 1; i <= numberCounts; i++) {
    let currentNumber = Number(gets());

    if (currentNumber > thirdLargest) {
        if (currentNumber >= secondLargest) {
            thirdLargest = secondLargest;
            if (currentNumber >= largest) {
                secondLargest = largest;
                largest = currentNumber;
            }
            else {
                secondLargest = currentNumber;
            }
        }
        else {
            thirdLargest = currentNumber;
        }
    }
}

print(`${largest}, ${secondLargest} and ${thirdLargest}`);