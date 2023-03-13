let n = +gets();

for (let i = 2; i <= n; i++) {
   while (n % i === 0) {
       n = n / i;
       print(i)
   } 
}