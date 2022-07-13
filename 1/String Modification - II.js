function stringModification2(N,str) {
    //write code here
    let result="";
    let k=Math.floor(N/2);
    for(i=k+1;i<N;i++){
        result=result+str[i];
    }
    let bag="";
    for(i=0;i<Math.floor(N/2);i++){
        bag=bag+str[i];
    }
    console.log(result+str[Math.floor(N/2)]+bag);
}