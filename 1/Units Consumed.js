function unitsConsumed(n) {
    //write code here
    let unit=n-80;
    if(unit<=150){
        console.log(Math.floor(unit/3));
    }else if (unit<=650){
        unit=unit-150;
        unit=unit/5;
        console.log(50+unit);
    }else{
        unit=unit-650;
        unit=unit/10;
        console.log(150+unit);
    }
    
}