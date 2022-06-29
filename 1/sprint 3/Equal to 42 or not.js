function equalTo42(size,arr) {
    //write code here
    let x=0;
    for(i=0;i<size;i++){
        if(arr[i]==42){
            x=arr[i];
            break;
        }
    }
    if(x==42){
        console.log("Yes");
    }else{
        console.log("No");
    }
}
