let N = gets().split(' ').map(Number);
let i = 0

while (true) {
    let temp = Number(N[i]) * 1.8 + 32;
    if (isNaN(temp)) {
        break;
    }
    print(Math.round(temp));
    i++
}