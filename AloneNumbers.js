const arr = gets().split(', ');
let target = gets();

for (let i = 1; i < arr.length - 1; i++) {
    if ((arr[i] === target) && (arr[i] !== arr[i + 1]) && (arr[i] !== arr[i - 1])) {
        if (arr[i - 1] > arr[i + 1]) {
        arr[i] = arr[i - 1];
        } else {
        arr[i] = arr[i + 1];
        };
    };
};
print(`[${arr}]`);