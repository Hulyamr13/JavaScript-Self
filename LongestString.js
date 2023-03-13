var input = "";
let maxLenght = 1;
let bestFood = "";
while ((input = gets()) != "END") {
  if (input.length >= maxLenght) {
    maxLenght = input.length;
    bestFood = input;
  }
}
print(bestFood);