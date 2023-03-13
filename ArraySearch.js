let list = gets().split(',').map(Number)
let missNumbs = '';
for (let i = 1 ; i < list.length+1 ; i++ ){
 if (list.indexOf(i) === -1){
     missNumbs = missNumbs + i + ',';
 }
}
print (missNumbs.substring(0, missNumbs.length-1));