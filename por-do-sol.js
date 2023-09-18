function draw() {
  if(posicaoVertical < 400){
    background("lightblue");
    posicaoVertical=posicaoVertical
     +1  
  } else{ background("black");
        }
  
  fill("orange");
  circle(250, posicaoVertical, 300);
  //background("black"); 
  fill("darkblue");
  rect(0, 250, 500, 350);
  fill("khaki");
  rect(0, 400, 500, 100);
}
