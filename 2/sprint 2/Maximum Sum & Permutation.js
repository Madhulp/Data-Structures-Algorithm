function runProgram(input){
    input=input.trim().split("\n");
    let N=(input[0]);
    let line=1;
    let arr=input[line].trim().split(" ").map(Number);
    Max(N,arr);
}

function Max(N,arr){
    arr.sort(function(p,q){
        if(p>q)return 1
        if(p<q)return -1
        return 0
            
        })
        let sum=0;
        for(let i=0;i<N;i++){
            sum=sum+(arr[i]*i)
        }
        console.log(sum);
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
