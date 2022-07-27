function battleOfOddAndEven(n, arr){
    //write code here
    sum1=0;
    sum2=0;
    for(i=0;i<n;i++){
        if(arr[i]%2!=0){
            sum1=sum1+arr[i];
        }else{
            sum2=sum2+arr[i];
        }
    }
        if(sum1>sum2){
            console.log("Odd");
        }else{
            console.log("Even");
        }
}
    
    