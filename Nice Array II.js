function niceArrayII(N, array, K) {
    //write code here
      let count=0;
      for(let i=0;i<=N-1;i++){
        if(i%2==1){
            count++;
        }
      }
      if(count>K){
            console.log("Nice Array");
      }else{
            console.log("Bad Array");
      }
  }