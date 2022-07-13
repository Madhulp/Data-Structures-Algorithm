function Expense (n, k, arr){
    let min = Infinity;
    let john = 0;
    for (let i = 0; i < k; i++){
        john += arr[i];
    }
    min = john;
    let left = 0;
    let right = k;
    while (left < n && right < n){
        john -= arr[left];
        john += arr[right];
        if (john < min){
            min = john;
        }
        right++;
        left++;

    }
    console.log(min);
}
function runProgram(input) {
    input = input.split("\n");
    let tc = +input[0];
    let line = 1;
    for (let i = 0; i < tc; i++){
        let [n, k] = input[line++].split(" ").map(Number);
        let arr = input[line++].split(" ").map(Number);
        Expense (n, k, arr);
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