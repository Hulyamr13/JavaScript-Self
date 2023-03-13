const t = Number(gets());
const n = Number(gets());
let letterPositionAscii = 0;
let alphaPosition = 0;
let sumOfLetters = 0;
let distance = 0;
let sumOfDistances = 0;
for (i = 0; i <= n - 1; i++) {
  word = gets().toLowerCase();
  for (k = 0; k <= word.length-1; k++) {
    letterPositionAscii = word.charCodeAt(k);
    alphaPosition = letterPositionAscii - 96;
    sumOfLetters += alphaPosition;
  }
  distance = Math.abs(sumOfLetters - t);
  sumOfDistances += distance;
  print(`${word} ${distance}`);
  sumOfLetters = 0;
}
print((sumOfDistances/n).toFixed(2))