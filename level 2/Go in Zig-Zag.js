function goInZigZag(N, M, matrix) {
    let str = "";
    for (let i = 0; i < N; i++) {
        if (i % 2 == 0) {
            for (let j = M - 1; j >= 0; j--) {
                str = str + matrix[i][j] + " ";
            }
        } else {
            for (let j = 0; j < M; j++) {
                str = str + matrix[i][j] + " "
            }
        }
    }
    console.log(str);
}