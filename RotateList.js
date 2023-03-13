let input = [ '2,1,3,4', 5 ]; ///1,3,4,2

let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

let myArr = gets().split(',').map(Number);
let arrLength = myArr.length;
let n = +gets();
let step = 0;
let newArr = [];
if (n > myArr.length) {
	step = n % myArr.length;
} else {
	step = n;
}
for (i = 0; i < myArr.length; i++) {
	if (i + step > myArr.length - 1) {
		newArr.push(myArr[i - myArr.length + step]);
	} else {
		newArr.push(myArr[i + step]);
	}
}
print(newArr);