let nums = gets();
let numbers = '';

for (let i = nums.length - 1; i >= 0; i--) {
    let currentElement = nums[i];
    numbers += currentElement + '';
}

print(numbers);