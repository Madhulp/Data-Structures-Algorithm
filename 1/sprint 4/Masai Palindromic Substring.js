function masaiPalSubString(S){
    //write code here
    let a=S.length;
    let maxlength=1;
    let start=0;
    for(let i=0;i<a;i++){
        for(let j=1;j<a;j++){
            let flag=1;
            for(let k=0;k<(j-i+1)/2;k++){
                if(S[i+k]!=S[j-k]){
                    flag=0;
                }
            }
            if(flag&&(j-i+1)>maxlength){
                start=i;
                maxlength=j-i+1
            }
        }
    }
    console.log(maxlength);
    
}