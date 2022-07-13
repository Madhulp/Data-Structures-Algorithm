function runProgram(input){
    input=input.trim().split("\n")
    let tc=Number(input[0])
    let line=1
    for(let i=0;i<tc;i++){
        let N=+(input[line])
        line++
        let arr1=input[line].trim().split(" ").map(Number)
        line++
        let arr2=input[line].trim().split(" ").map(Number)
        line++
        TwoSorted(N,arr1,arr2)
    }
}
function TwoSorted(N,arr1,arr2){
    let left=0;
    let right=arr1.length-1;
    let count=0;
    while(left<arr1.length && right>=0){
        if (arr1[left]<arr2[right]){
            left++;
        }
        else if (arr1[left]>arr2[right]){
            right--;
        }
        else{
            count++;
            left++;
            right--
        }
    }
    console.log(count);
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
