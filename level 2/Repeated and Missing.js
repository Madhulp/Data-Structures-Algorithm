function repeatedAndMissing(arr){
    let missing;
    let repeat;
    let obj={};
    for (let i=0;i<arr.length;i++){
        if (!obj[arr[i]]) obj[arr[i]]=1;
        else obj[arr[i]]++;
    }
    for (let i=1;i<=arr.length;i++){
        if (obj[i]===2) repeat=i;
        if (!obj[i]) missing =i;
    }
    return missing + " "+repeat;
}

function runProgram(input){
    let newInput=input.split("\n");
    let a=Number(newInput[0]);
    for (let i=1;i<a*2;i+=2){
        let arr=newInput[i+1].trim().split(" ").map(Number);
        console.log(repeatedAndMissing(arr));
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