let years = Number(gets());
let dogYears = 0;

if(years <= 2){
    dogYears = years*10;
}else if(years > 2){
    dogYears = 20+((years-2)*4);
}

print(dogYears);