function sumAndProductEquation(N, arr) {
    //write yur code here
      let x=0;
      let y=1;
      for(let a=0;a<=N-1;a++){
          x=x+arr[a];
          y=y*arr[a];
      }
      console.log(5*x+3*y);
  }