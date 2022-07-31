function runProgram(input) {
  input = input.trim().split("\n")
  let tc = Number(input[0])
  let line = 1;
  for (let i = 0; i < tc; i++) {
    let arr = input[line].trim().split(" ").map(Number)
    let N = arr[0]
    let K = arr[1]
    line++;
    let str = input[line].trim().split(" ").map(Number)
    line++
    let x = Diff(N, K, str)
    if (x == true) {
      console.log("Yes")
    } else {
      console.log("No")
    }
  }
}
function Diff(N, K, arr) {
  first = 0;
  second = 0;
  while (first < arr.length && second < arr.length) {
    temp = arr[second] - arr[first];
    if (temp == K && first != second)
      return true;
    if (temp < K) {
      second++;
    }
    else {
      first++;
    }
  }
  return false;
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
