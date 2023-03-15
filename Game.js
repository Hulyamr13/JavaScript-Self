let number = gets();
let a = Number(number[0]);
let b = Number(number[1]);
let c = Number(number[2]);

let maximum = Math.max(
        a + b + c,
        a * b * c,
        a + b * c,
        a + b * c
    );
print(maximum);