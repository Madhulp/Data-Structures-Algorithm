function divisionTask(N) {
    // Write code here
    divident=32;
    if(N==0){
        console.log("-1");
    }else if (N>divident){
        console.log("Too Low");
    }else{
        console.log(Math.floor(divident/N));
    }
}