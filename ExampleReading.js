// sample input
// each line should consist of single string and a comma right after
let input = [
    'Peter',
    '25',
  ];
  
  let print = this.print || console.log;
  let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);
  
  // read the first line of the input, no need to convert it to a string, it already is
  let input1 = gets();
  
  // read the second line and convert it to a number
  let input2 = gets();
  
  let age = Number(input2);
  let ageIn5Years = age + 5;
  
  // string concatenation
  print(input1 + ' is ' + age + ' years old.');
  
  // string interpolation. You could use this as it is way more readable
  print(`${input1} is ${age} years old.`);
  