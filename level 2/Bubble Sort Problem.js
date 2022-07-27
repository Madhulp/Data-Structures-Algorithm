function solve(N,arr){
    for(i=0;i<N-1;i++){
        for(j=0;j<N-1-i;j++){
            if(arr[j]>arr[j+1]){
                [arr[j], arr[j+1]]=[arr[j+1],arr[j]]
            }
        }
      
    }
    // console.log(arr
    let bag=""
    for(i=0;i<N;i++){
        bag=bag+arr[i]+" "
    }
    console.log(bag)
}

