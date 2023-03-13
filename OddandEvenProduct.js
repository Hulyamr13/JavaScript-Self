let count = +gets();
let oddProduct = 1;
let evenProduct = 1;

for (let i = 1; i <= count; i++) {
    if (i % 2 != 0) {
    evenProduct *= +gets();
    }
    else{
    oddProduct *=+gets();
    }
}

if (oddProduct === evenProduct) {
    print(`yes ${oddProduct}`);
}
else print(`no ${evenProduct} ${oddProduct}`);