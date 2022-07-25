function runProgram(input) {
    input = input.trim().split("\n");
    let tc = +(input[0]);
    let line = 1;
    for (let i = 0; i < tc; i++) {
        let str = input[line];
        line++;
        excelColumn(str);
    }
}

function excelColumn(str) {
    let count = 0;
    for (let a = 0; a < str.length; a++) {
        count = count * 26;
        count = count + str[a].charCodeAt(0) - 'A'.charCodeAt(0) + 1;
    }
    console.log(count);
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
