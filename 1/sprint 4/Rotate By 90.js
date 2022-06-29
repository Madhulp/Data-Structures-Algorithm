function rotateBy90(R, matrix){
    //write code here
    for(i=R-1;i>=0;i--){
        let bag="";
        for(let j=0;j<R;j++){
            bag=bag+matrix[j][i]+" ";
        }
        console.log(bag);
    }
  
}