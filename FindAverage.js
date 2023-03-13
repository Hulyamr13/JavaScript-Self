let a = +gets();
let sum = 0;
for (let i = 0 ; i < a ; i ++){
let g = +gets();
sum = sum + g;
}
let avg = sum / a;
print(avg.toFixed(2));