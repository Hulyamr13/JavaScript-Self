let line = gets().split(',').map(Number);
let more = '';
let zero = '';
let less = '';
let newLine = [];
for (let i = 0; i < line.length; i++) {
    if (line[i] > 0) {
        more += line[i] + ',';
    } else if (line[i] == 0) {
        zero += line[i] + ',';
    } else if (line[i] < 0) {
        less += line[i] + ',';
    }

}
newLine = (less.concat(zero, more));
newLine = newLine.slice(0, newLine.length - 1)
print(newLine);