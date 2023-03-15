let input = [
    'anagram',
    '6',
    'gramana',
    'aaagrnm',
    'anagra',
    'margana',
    'abc',
    'xy',
  ];
  
  let print = this.print || console.log;
  let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);
  
  let anagram = gets();
  let wordCount = +gets();
  for(let i = 0; i < wordCount; i++) {
    let word = gets();
    let isAnagram = true;
    if(word.length !== anagram.length) {
      isAnagram = false;
    }
    else{
      for(let j = 0; j < anagram.length; j++) {
        let letter = anagram[j];
        if(word.includes(letter)) {
          continue;
        }
        else{
          isAnagram = false;
          break;
        }
      }
      
    }
    print(isAnagram ? 'Yes' : 'No');
  }