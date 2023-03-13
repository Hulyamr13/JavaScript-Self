let n = Number(gets());
let result = '';
let x = 0;

for (let i = 0; i < n; i++) {
    if (n < 1 && n > 20) {
        break;
    }
    for (let j = 0; j < n; j++) {
        x = i + j;
        result += x + 1;
        result += ' ';
    }
    print(result);
    result = '';
}