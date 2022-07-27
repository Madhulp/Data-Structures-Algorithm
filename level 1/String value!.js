function stringValue(S) {
    //write code here
    let lower="abcdefghijklmnopqrstuvwxyz"; 
    let sum=0;
    for(let i=0;i<S.length;i++){
        for(let j=0;j<lower.length;j++){
              if(S[i]==lower[j]){
                  sum=sum+(j+1);
              }
          }
      }
    console.log(sum);
  }
  