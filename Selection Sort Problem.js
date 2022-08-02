function solve(N,arr){
    for(i=0;i<N-1;i++){
        let minIndex=i
        for(j=i+1;j<N;j++){
            if(arr[minIndex]>arr[j]){
                minIndex=j
            }
        }
        [arr[i], arr[minIndex]]=[arr[minIndex],arr[i]]
    }
    let bag=""
    for(i=0;i<N;i++){
        bag=bag+arr[i]+" "
    }
    console.log(bag)
}