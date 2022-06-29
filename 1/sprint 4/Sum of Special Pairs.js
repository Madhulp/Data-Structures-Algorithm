function sumOfSpecialPairs(N,A){
    //write code here
    let sum=0;
    for(let i=0;i<=A.length-1;i++){
        for(let j=i+1;j<=A.length-1;j++){
            if(CheckPrime(j-i)){
                sum=sum+Math.abs(A[i]-A[j]);
            }
        }
    }
    console.log(sum);
}
    function CheckPrime(num){
        if(num<=1){
            return false;
        }
        for(let i=2;i<=Math.sqrt(num);i++){
                if(num%i===0){
                    return false;
        }
    }
    return true;

}