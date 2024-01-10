//adding a GIF to my grid

 let gif; 
 
 function preload ('assets/ClineGIF.gif');

function setup() {//runs one time
createCanvas (windowWidth, windowHeight);
  fill('yellow');
  strokeWeight (1);

}

function draw() {//runs in a loop
  
  background ('white');
  
  var num = 10

  var sideLen = windowWidth/num;

  
  for (var y = 0; y < windowHeight; y = y + sideLen) 
{
  
  for (var x = 0; x < windowWidth; x = x + sideLen) 
{
image (gif, x, y, sideLen, sideLen);

  
  }
}
  
}

function windowResized(){
  resizeCanvas(windowWidth, windowHeight)
}