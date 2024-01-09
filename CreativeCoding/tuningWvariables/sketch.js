function setup() {//runs one time
createCanvas (windowWidth, windowHeight);
  fill('yellow');
  strokeWeight (1);

}

function draw() {//runs in a loop
  
  var num = 10

  var sideLen = windowWidth/num;

  
  for (var y = 0; y < windowHeight; y = y + sideLen) 
{
  
  for (var x = 0; x < windowWidth; x = x + sideLen) 
{
    quad (
    x,y,
    x + 360,y,
    x + 360,y + 360,
    x,y + 360  
  );//loop to create a row in the x direction
  
  }
}
  
}

function windowResized(){
  resizeCanvas(windowWidth, windowHeight)
}