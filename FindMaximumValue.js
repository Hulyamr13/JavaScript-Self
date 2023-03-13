let n = +gets();
n >= 1 && n <= 20;
let max = Number.MIN_SAFE_INTEGER;
max >= -200 && max <= 200;
for(let i = 0; i < n; i++){
let a = +gets();
if(max <= a){
max = a;}

}
print(max);