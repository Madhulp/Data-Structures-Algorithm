function traverse2dArray(N, M, matrix){
    //write code here
    let bag="";
    for(let j=0;j<M;j++){
        for(let i=N-1;i>=0;i--){
            bag=bag+matrix[i][j]+" ";
        }
    }
    console.log(bag);
  
}