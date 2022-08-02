function motuHouse(n){
    let count=0;
    while(n){
        if(n>=5){
            count=count+((n-n%5)/5);
            n=n%5;
        }
        else if(n>=4){
            count+=((n-n%4)/4);
            n=n%4;
        }
         else if(n>=3){
            count+=((n-n%3)/3);
            n=n%3;
        }
         else if(n>=2){
            count+=((n-n%2)/2);
            n=n%2;
        }
         else if(n>=1){
            count+=((n-n%1)/1);
            n=n%1;
        }
    }
    return count;
}
function runProgram(input){
    var n=input;
    console.log(motuHouse(n));
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
