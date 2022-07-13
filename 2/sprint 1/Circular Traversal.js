function cirTraversal(matrix,N) {
    let jhola='';
   for(i=N-1;i>=0;i--){
       
       let k=matrix[i][0];
       jhola=jhola+k+' ';
   }
   
   for(j=1;j<N;j++){
       let w=matrix[0][j];
       
       jhola=jhola+w+' ';
   }
   for(i=1;i<N;i++){
       let r=matrix[i][N-1];
       jhola=jhola+r+' ';
   }
   
   for(j=N-2;j>=1;j--){
       
       let m=matrix[N-1][j];
       jhola=jhola+m+' ';
   }
   console.log(jhola);
}

