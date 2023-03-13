var a = +gets();
var b = +gets();
var c = +gets();

var maxNum = 0;

if(a > b){
    maxNum = a;
} else {
    maxNum = b;
} if(c > maxNum){
    maxNum = c;
} 
print(maxNum);