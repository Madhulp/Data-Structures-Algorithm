function identifyPrime(num) {
    // Write code here
    let answer=true;
    for(i=2;i<num;i++){
        if(num%i==0){
            answer=false;
            break;
        }
    }
    if (answer==true){
        console.log("Yes");
    }else{
        console.log("No");
    }
}  