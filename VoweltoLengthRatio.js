let n = +gets();
  let vowelsCount = 0;
  let regex = /[aouei]/g;
  let bestRatio = 1;
  let maxVowelsCount = 0;
  let maxLetterCount = 0;

  for (let i = 0; i < n; i++) {
    let food = gets().toString();
    for (let j = 0; j < food.length; j++) {
      if ((food.charAt(j)).match(regex)) {
        vowelsCount++
      }
    }
    ratio = vowelsCount/food.length;

    if (ratio <= bestRatio) {
      bestRatio = ratio;
      if (bestRatio == ratio && vowelsCount >= maxVowelsCount) {
        maxVowelsCount = vowelsCount;
        if (bestRatio == ratio && vowelsCount == maxVowelsCount && food.length >= maxLetterCount) {
          maxLetterCount = food.length;
          bestFood = food;
        }
      }
    } 
    vowelsCount = 0;
  } 
  print(bestFood + ' ' + maxVowelsCount + '/' + bestFood.length);