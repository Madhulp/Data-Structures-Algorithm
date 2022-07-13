function partyPlanning(N,PamID,M,JimID){
    let arr=[];
    let arr1=[];
    let obj={};
    let obj1={};
    for(let i=0;i<N;i++){
        let x=PamID[i];
        if(obj[x]===undefined){
            obj[x]=1;
        }else{
            obj[x]++;
        }
    }
    for(let key in obj){
        arr.push(key);
    }
    for(let j=0;j<M;j++){
        let y=JimID[j];
        if(obj1[y]===undefined){
            obj1[y]=1;
        }else{
            obj1[y]++;
        }
    }
    for(let key1 in obj1){
        arr1.push(key1);
    }
    let count=0;
    if(arr.length===arr1.length){
        for(k=0;k<arr.length;k++){
            if(arr[k]===arr1[k]){
                count++;
            }
        }
    }else{
        count=0;
    }
    if(count===arr.length){
        console.log("Yes");
    }else{
        console.log("No");
    }
    
}