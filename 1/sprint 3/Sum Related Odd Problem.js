function sumRelatedOddProblem(n) {
    // Write code here
    sum=0;
    i=1;
    while(i<=n){
        if(i%2!=0){
            sum=sum+i;
        }
        i++;
    }
    console.log(sum);
}