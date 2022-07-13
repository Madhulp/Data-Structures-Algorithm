function subStrUnderCond(s){
    //write code here
        a="";
        count=0;
        for(i=0;i<s.length;i++){
            for(j=i;j<s.length;j++){
                if(s[i]==s[j]){
                    a=a+s[j];
                    count=count+1;
                }
            }
        }
        console.log(count);
    
    }