function maximumFrequency(mf,N,str){
    let max=-Infinity;
    let obj={};
    for(let i=0;i<N;i++){
        let frq=str[i];
        if(obj[frq]===undefined){
            obj[frq]=1;
        }else{
            obj[frq]++;
        }
    }
    for(let i in obj){
        if(obj[i]>max){
            max=obj[i];
        }
    }
    console.log(max);
}

function runProgram(input){
    input=input.trim().split("\n");
    let mf=+input[0];
    let line=1;
    for(let i=0;i<mf;i++){
        let N=Number(input[line]);
        line++;
        let str=input[line];
        line++;
        maximumFrequency(mf,N,str)
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
