let a = '';
let n = 5;
let m = (n-1); 
for(i=1; i <= n; i++)
{
    a = a.trim();
    a = ' '.repeat(m) + a + (i > 1 ? ' ' : '') + '*';
    console.log(a);
    m--;
} 