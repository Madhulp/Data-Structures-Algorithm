function maximumOccuringElement(A,N){
    let obj={}
    for(let i=0;i<N;i++){
        k=A[i];
        if(obj[k]===undefined){
            obj[k]=1;
        }else{
            obj[k]++;
        }
    }
    let a=0;
    let b=0;
    for(let key in obj){
        if(obj[key]>b){
            b=obj[key];
            a=key;
        }
    }
    console.log(a);
}