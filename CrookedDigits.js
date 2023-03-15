let n = gets().split("").map(Number);

let sum = 0;

let num = [];

for(i = 0; i < n.length; i++){
     if (!isNaN(n[i])){
       num.push(n[i])
     }
   }

for (let i = 0; i < num.length; i++){
  
  sum += num[i]
}
while (sum > 9){
 let sum2 = sum
    .toString()
    .split("")
    .map(Number)

 let final = 0;


  for (let j = 0; j < sum2.length; j++){
  final = final + sum2[j]
  }
  sum = final
}

print(sum)