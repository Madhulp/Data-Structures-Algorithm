function detectPalindrome(num){
    //write code here
        let bag="";
        for(let i=num.length-1;i>=0;i--){
            bag=bag+num[i];
        }
        if(bag==num){
            console.log("Yes");
        }else{
            console.log("No");
        }
        
        
    }
    