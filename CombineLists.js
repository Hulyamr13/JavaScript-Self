let arrFirst = gets().split(",");
let second = gets().split(",");
let combined = [arrFirst, second];
let output = "";
for(var i=0; i<arrFirst.length; i++){
  for(var k=0; k<2; k++){
if (i===arrFirst.length-1&&k===1){
  output+=combined[k][i];
}
else{
output+=combined[k][i]+",";
}
  }
}
print(output);