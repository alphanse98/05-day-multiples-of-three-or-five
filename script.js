let n = parseInt(prompt("enter the valu "))
for(i=2;i<=n;i++){
    a = 0
    for(j=2;j<=i/2;j++){
        if(i%j == 0){
            a = 1
        }
    }
    if(a == 0){
        console.log(i, 'is a prime number');
    }
}
