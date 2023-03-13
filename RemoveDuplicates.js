let line = gets().split(',');
let newLine = [];

let unique = [...new Set(line)];

let str = '';

for (let i = 0; i < unique.length - 1; i++) {
    str = str + unique[i] + ',';
}
print(str + unique[unique.length - 1]);