function tripletSum(n, arr) {
    arr.sort((a, b) => {
        if (a > b) return 1;
        if (a < b) return -1;
        return 0;
    });

    for (let i = 0; i < n; i++) {
        let j = 0;
        let k = i + 1;
        while (j < k) {
            if (arr[i] === arr[j] + arr[k] && i !== j && i !== k) {
                return 1;
            } else if (arr[i] > arr[j] + arr[k] && i !== j && i !== k) {
                j++;
            } else {
                k--;
            }
        }
    }
    return 0;
}

function runProgram(input) {
    input = input.split("\n");
    let tc = +input[0];
    let line = 1;
    for (let i = 0; i < tc; i++) {
        n = +input[line++];
        let arr = input[line++].split(" ").map(Number);
        let answer = tripletSum(n, arr);
        console.log(answer);
    }
}

if (process.env.USER === "") {
    runProgram(``);
} else {
    process.stdin.resume();
    process.stdin.setEncoding("ascii");
    let read = "";
    process.stdin.on("data", function (input) {
        read += input;
    });
    process.stdin.on("end", function () {
        read = read.replace(/\n$/, "");
        read = read.replace(/\n$/, "");
        runProgram(read);
    });
    process.on("SIGINT", function () {
        read = read.replace(/\n$/, "");
        runProgram(read);
        process.exit(0);
    });
}
