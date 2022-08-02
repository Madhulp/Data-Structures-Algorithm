function traverse2dArray(N, M, matrix){
    //write code here
    let bag="";
    for(let j=M-1;j>=0;j--){
        for(let i=0;i<N;i++){
            bag=bag+matrix[i][j]+" ";
        }
    }
    console.log(bag);
  
}
