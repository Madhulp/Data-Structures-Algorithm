function runProgram(input) {
    input=input.trim().split("\n")
    let a=+input[0]
    let array=input[1].trim().split(" ").map(Number)
    parityCheck(a,array)
}

function parityCheck(a,array){
    let Evencount=0;
    let Oddcount=0;
    let uteDifferenceabsol=0;
    for(let i=0;i<a;i++){
        if(array[i]%2===0){
            Evencount++;
        }
        if(array[i]%2===1){
            Oddcount++;
        }
    }
    absoluteDifference=Math.abs(Oddcount-Evencount)
    console.log(absoluteDifference)
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
