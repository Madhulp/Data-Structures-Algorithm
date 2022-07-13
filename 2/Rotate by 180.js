function rotateBy180(N, matrix){
    for(let i=N-1;i>=0;i--){
        let a="";
        for(let j=N-1;j>=0;j--){
            a=a+matrix[i][j]+" "
        }
        console.log(a);
    }
}
