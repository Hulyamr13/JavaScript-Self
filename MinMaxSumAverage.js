let n = +gets();

let sum = 0;
let min = Number.MAX_SAFE_INTEGER;
let max = Number.MIN_SAFE_INTEGER;

for (let i = 0; i < n; i++) {
    let m = +gets()
    if (min >= m) {
        min = m;        
    }    
    if (max <= m) {
        max = m;
    }

    sum += m;
}

print(`min=${(min).toFixed(2)}`);
print(`max=${(max).toFixed(2)}`);
print(`sum=${(sum).toFixed(2)}`);
print(`avg=${(sum/n).toFixed(2)}`);