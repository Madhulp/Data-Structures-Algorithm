function encryptionSchemeII(N,array){
    //write code 
    let sum=0;
    for(let i=0;i<N;i++){
        if(array[i]==0){
            sum=sum+(i+1);
        }
    }
    console.log(sum);

}