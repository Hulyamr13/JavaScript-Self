let totalMess = Number(gets());
let totalMin = Number(gets());

let addMess = totalMess - 20;
let addMin = totalMin - 60;

if ((addMess > 0) && (addMin > 0)) {
    addMess = totalMess - 20;
    addMin = totalMin - 60;
} else if ((addMess > 0) && (addMin < 0)) {
    addMess =  totalMess - 20;
    addMin = 0;
} else if ((addMess < 0) && (addMin > 0)) {
    addMess = 0;
    addMin = totalMin - 60;
} else if ((addMess < 0) && (addMin < 0)) {
    addMess = 0;
    addMin = 0;
} else if ((addMess === 20) & (addMin === 60)) {
    addMess = 0;
    addMin = 0;
}
let addMessPrice = addMess * 0.06;
let addMinPrice = addMin * 0.1;
let addTax = (addMinPrice + addMessPrice) * 0.2;
let totalBill = 12 + addTax + addMinPrice + addMessPrice;

print(addMess + ' additional messages for ' + addMessPrice.toFixed(2) + ' levas');
print(addMin + ' additional minutes for ' + addMinPrice.toFixed(2) + ' levas');
print(addTax.toFixed(2) + ' additional taxes');
print(totalBill.toFixed(2) + ' total bill');