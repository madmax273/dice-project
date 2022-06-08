var n1=Math.floor(Math.random()*6)+1;
document.querySelector(".img1").setAttribute("src","images/"+"dice"+n1+".png");
var n2=Math.floor(Math.random()*6)+1;
document.querySelector(".img2").setAttribute("src","images/"+"dice"+n2+".png");

if(n1>n2)
 document.querySelector("h1").innerHTML="😎player 1 wins";
else if(n1===n2)
  document.querySelector("h1").innerHTML="draw";
else
  document.querySelector("h1").innerHTML="player 2 wins😎";
// no a dry code 