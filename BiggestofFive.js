let a = Number(gets());
let b = Number(gets());
let c = Number(gets());
let d = Number(gets());
let e = Number(gets());

if(a >= b && a >= c && a >= d && a >= e){
    print(a);
} else if(b >= a && b >= c && b >= d && b >= e){
    print(b);
} else if(c >= a && c >= b && c >= d && c >= e){
    print(c);
} else if(d >= a && d >= b && d >= c && d >= e){
    print(d);
} else if(e >= a && e >= b && e >= c && e >= d){
    print(e);
}