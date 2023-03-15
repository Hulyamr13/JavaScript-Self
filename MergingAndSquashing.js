let count = Number(gets());
let mergedOutput = '';
let squashedOutput = '';

let previousNumber = Number(gets());
for (let i = 1; i < count; i++) {
    let a = Math.floor(previousNumber / 10) % 10;
    let b = previousNumber % 10; 

    let currentNumber = Number(gets());
    let c = Math.floor(currentNumber / 10) % 10;
    let d = currentNumber % 10; 

    let merged = '' + b + c;
    let squashed = '' + a + ((b + c) % 10) + d;
    mergedOutput += merged + ' ';
    squashedOutput += squashed + ' ';

    previousNumber = currentNumber;
}

print(mergedOutput.trim());
print(squashedOutput.trim());