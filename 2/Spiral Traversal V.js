function spiralTraversalV(N, matrix){
    let top=0;
    let bottom=matrix.length-1;
    let right=matrix[0].length-1;
    let left=0;
    let jhola="";
    let count=0;
    while(count<matrix.length*matrix[0].length){
        for(let i=top;i<=bottom && count<=matrix.length*matrix[0].length;i++){
            jhola+=matrix[i][right]+" ";
            count++;
        }
        right--;
        
        for(let i=right;i>=left && count<=matrix.length*matrix[0].length;i--){
            jhola+=matrix[bottom][i]+" ";
            count++;
        }
        bottom--;
        
        for(let i=bottom;i>=top && count<matrix.length*matrix[0].length;i--){
            jhola+=matrix[i][left]+" ";
            count++;
        }
        left++;
        
        for(let i=left;i<=right && count<matrix.length*matrix[0].length;i++){
            jhola+=matrix[top][i]+" ";
            count++;
        }
        top++;
    }
    console.log(jhola);

}