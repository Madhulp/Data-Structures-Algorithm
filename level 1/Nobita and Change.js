function nobitaChange(N,str) {
    function tolower(char){
    let lower="abcdefghijklmnopqrstuvwxyz";
    let upper="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    for(let i=0;i<=upper.length-1;i++){
        if(char==upper[i]){
            return lower[i];
        }
    }
    return char;
    }
    let bag="";
    for(let i=0;i<=str.length-1;i++){
        let new_words=tolower(str[i]);
        bag=bag+new_words;
    }
    console.log(bag);
}