var color1,color2,color3;

function setup() {
  createCanvas(600,400);
  
}
function draw() {
  background(map(mouseX,0,400,200,255),map(mouseX,0,400,0,100),map(mouseX,0,400,100,255));  
  
  var a = map(mouseX,0,400,0,100);
  var b = map(mouseX,0,400,100,255);
  var c = map(mouseX,0,400,200,255);
  //var 

  push();
  fill(rgb(c,b,a));
  color1 = ellipse(200,280,a,a);
  pop();

  push();
  fill(rgb(a,b,a));
  color2 = ellipse(350,280,a,a);
  pop();

  push();
  fill(rgb(a,b,c));
  color3 = ellipse(350,120,a,a);
  pop();

  push();
  fill(rgb(b,a,c));
  color4 = ellipse(200,120,a,a);
  pop();

  ellipse(mouseX,mouseY,map(mouseX,0,600,0,120),map(mouseY,0,400,0,120));

  drawSprites();
}