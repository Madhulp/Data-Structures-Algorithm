function sumRelatedProblem(N) {
    // Write code here
    sum=0;
    let i=1;
    while(i<=N){
        if(i%2==0){
            sum=sum+i;
        }
        i++;
    }
    console.log(sum);
}
