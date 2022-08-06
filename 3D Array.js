function Array3D(N, M, K, array) {
    for (i = 0; i < N; i++) {
        for (j = 0; j < M; j++) {
            let a = '';
            for (n = 0; n < K; n++) {
                a = a + array[i][j][n] + ' '
            }
            
            console.log(a);
        }
    }
}
