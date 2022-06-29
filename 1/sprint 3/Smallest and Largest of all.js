function smallestAndLargestOfAll(n, arr){
    //write code here
    let min=arr[0];
    let max=arr[0];
    for(let i=0;i<=n-1;i++){
        if(min>arr[i]){
            min=arr[i];
        }else{
            if(max<arr[i]){
            max=arr[i];
        }    
    }
    }
    console.log(min);
    console.log(max);
}
