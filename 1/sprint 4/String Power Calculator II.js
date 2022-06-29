function strPowerCalc(N, str){
	//Write your code here
	let x=0;
	let y=0;
	for(let i=0;i<N;i++){
	    if(str[i]=="a"||str[i]=="e"||str[i]=="i"||str[i]=="o"||str[i]=="u"){
	        x++;
	    }else{
	        y++;
	    }
	 }
	 console.log(5*x+7*y)
}