function countSuchPairs(N, K, A) {
    //write code here
    let count = 0;
    let m = [];
    for (let i = 0; i < N; i++) {
        if (A[i] == 0) {
            continue
        } else {
            m.push(A[i])
        }
    }
    for (let i = 0; i < m.length; i++) {
        for (let j = (i + 1); j < m.length; j++) {
            if (m[i] + m[j] == K) {
                count++;
            }
        }
    }
    console.log(count);
}