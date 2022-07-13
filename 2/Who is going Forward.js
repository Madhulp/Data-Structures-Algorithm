function goingForward(N,K,A){
    let count=0;
    for(let i=0;i<=A.length;i++){
        if(A[i]>=A[K-1]&& A[i]>0){
            count=count+1;
        }
    }
    console.log(count);
}
