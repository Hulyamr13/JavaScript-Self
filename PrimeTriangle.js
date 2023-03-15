let input = [
    '10'
];

let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);


let numbers = +gets();
let isPrime = true;
let output = '';

for (let isItPrime = 1; isItPrime <= numbers; isItPrime++) {
    isPrime = true;
    for (let divider = 2; divider < isItPrime; divider++) {
        if (isItPrime % divider === 0) {
         isPrime = false;
            break;
        } 
    }
    if(isPrime){
        output += '1';
        print(output);
    }else {
        output += '0';
    }
}