function sumWithoutBorders(N, M, matrix) {
    let sum = 0;
    for (let i = 1; i < N - 1; i++) {
        for (let j = 1; j < M - 1; j++) {
            sum = sum + matrix[i][j];
        }
    }
    console.log(sum);
}