function runProgram (input){
    let obj={};
    for(let i=0;i<input.length;i++){
        let p=input[i];
        if(obj[p]===undefined){
            obj[p]=1;
        }
    }
    let jhola="";
    for(let key in obj){
        if(obj[key]==1){
            jhola=jhola+key;
        }
    }
    console.log(jhola);
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
