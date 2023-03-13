let x = Number(gets());
let y = Number(gets());
let target = Number(gets());

let sum = 0;

for (let i = x; i <= y; i++) {
  let current = i;
  current = current.toString();
  let firstNum = Number(current.charAt(0));
  let secondNum = Number(current.charAt(1));
  let thirdNum = Number(current.charAt(2));
  sum = firstNum + secondNum + thirdNum;
  if (sum == target) {
    print(current);
  }
}