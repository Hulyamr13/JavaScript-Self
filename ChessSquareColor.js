let label = gets();
let labelCode = label.charCodeAt(0) - 96;
let rank = +gets();
let color;

if ((labelCode % 2 === 0 && rank % 2 === 1) || labelCode % 2 === 1 && rank % 2 === 0) {
    color = 'light'
} else {
    color = 'dark';
}

print(color);