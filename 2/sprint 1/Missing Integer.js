function runProgram(input){
    input=input.trim().split(" ").map(Number);
    missingInput(input);
}

function missingInput(arr){
    for(let i=1;i<=arr.length;i++){
        if(arr.indexOf(i)==-1){
            console.log(i);
        }
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