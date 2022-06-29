function applyBasicMaths(N,A){
    //write code here
    let element=Infinity;
    let index=-1;
    for(let i=0;i<N;i++){
        let sum=0;
        for(let j=0;j<N;j++){
            if(i==j){
                continue;
            }else{
                sum=sum+A[j];
            }
        }
        if(sum%7==0 && A[i]<element){
            element=A[i];
            index=i;
        }
    }
    console.log(index);
}
