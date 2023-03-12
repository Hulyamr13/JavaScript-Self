let input = [ 4, 3, 11, 40 ];

let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

let d = Number(gets()) * 24 * 60 * 60;
let h = Number(gets()) * 60 * 60;
let m = Number(gets()) * 60;
let s = Number(gets());
let sum = d + h + m + s;
print(sum);