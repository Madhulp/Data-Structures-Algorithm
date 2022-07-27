function averageOfAll(n, arr){
    //write code here
    sum=0;
    average=0;
    count=0;
    for(i=0;i<=n-1;i++){
        sum=sum+arr[i];
        count++;
        average=sum/count;
        
        
    }
    console.log(average);
}
