let steps = gets().split('');

let move = '';
let x = 0;
let y = 0;

for(let i = 0; i < steps.length; i++){
    move = steps[i];
    if(move === 'L'){
        x -= 1;
    } else if(move === 'R'){
        x += 1;
    } else if(move === 'U'){
        y += 1;
    } else if(move === 'D'){
        y -= 1;
    }
}
print(`(${x}, ${y})`);