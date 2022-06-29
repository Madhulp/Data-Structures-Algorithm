function runProgram(input){
    input=input.trim().split("\n");
    let tc=input[0];
    let line=1;
    
    for(let i=0;i<tc;i++){
        let length=Number(input[line]);
        line++;
        let str=input[line];
        generateSllSubstring(length,str);
        line++
    }
}
function generateSllSubstring(N,str){
    for(let i=0;i<N;i++){
        for(let j=i+1;j<=N;j++){
            console.log(str.slice(i,j))
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