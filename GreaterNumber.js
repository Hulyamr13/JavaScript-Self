let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

let arr1 = gets().split(',').map(Number);
let arr2 = gets().split(',').map(Number);

let output = '';

for (let i=0; i<arr1.length; i++){
    let num = arr1[i];
    let id = arr2.indexOf(num);
    if(id == arr2.length-1){
        output += '-1,';
        continue;
    }
    else {
        for(let j = id+1; j < arr2.length; j++){
            if((j==arr2.length-1) && (arr2[j]<=num)){
                output += '-1,';
                break;
            }
            if(arr2[j]>num){
                output += arr2[j] +',';
                break;
            }
        }
    }
}

output = output.slice(0, -1);
console.log(output)