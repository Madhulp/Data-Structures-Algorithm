function runProgram(input) {
    input=input.trim().split("\n")
    let arr1=input[0].trim().split(" ").map(Number);
    let matrixLeng =arr1[0];
    let sizeOfArr = arr1[1];
    let line =1;
    for(let i=0;i<matrixLeng;i++){
        let arr=input[line].trim().split(" ").map(Number);
        line++;
        binaryMatrix(arr);
    }
}
function binaryMatrix(arr){
    let binary="";
    for(let i=0;i<arr.length;i++){
        if(arr[i]==1){
            binary=binary+0+" ";
        }else if(arr[i]==0){
            binary=binary+1+" ";
        }    
    }
        console.log(binary);
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



 