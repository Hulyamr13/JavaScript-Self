const numsCounter = {
    1: 0,
    2: 0,
    3: 0,
    4: 0,
    5: 0,
    6: 0,
    7: 0,
    8: 0,
    9: 0,
    10: 0,
  };
  
  const n = +gets();
  let arr = [];
  
  for (let i = 0; i < n; i++) {
    num = +gets();
    numsCounter[num]++;
  }
  
  let mostFrequentNumber = 1;
  let mostFrequentNumberValue = numsCounter[mostFrequentNumber];
  
  for (let i = 2; i <= 10; i++) {
    if (mostFrequentNumberValue < numsCounter[i]) {
      mostFrequentNumberValue = numsCounter[i];
      mostFrequentNumber = i;
    }
  }
  
  print(mostFrequentNumber);