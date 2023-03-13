let input = [
    '0,0,0,5,0,3,2,3'
  ];
  
  var print = this.print || console.log;
  var gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);
   
  
  
  let number = gets();
  let allNumbers = [];
  let stringOne = [];
  let stringTwo = [];
  let eachNumber = number.split(",");
  
  
  
  for (j=0; j< number.length; j++){
  if(eachNumber[j] == 0 ){
    
    stringOne += eachNumber[j] + ',';
   
  }else if (eachNumber[j] > 0 || eachNumber[j] < 0 ){ 
    stringTwo += eachNumber[j] + ',';
    
  }
   
  }
  
  let result = stringTwo + stringOne;
  
  print(result.substring(0, result.length - 1));