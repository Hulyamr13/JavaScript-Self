let line = gets().split('');
let even = odd = 0;

for (let i = 0; i < line.length; i++) {

    if (+line[i] % 2 === 0) {
        
        even += +line[i];
    } else {
        
        odd += +line[i];
    };
};

if (even > odd) {

    print(`${even} energy drinks`)
} else if (even < odd) {

    print(`${odd} cups of coffee`)
} else if (even === odd) {

    print(`${odd} of both`)
};