function setup() {
  createCanvas (450,750);
  smooth();
  
  background (5);
  noLoop();
  noFill();
  strokeWeight (0.5);
  stroke (255, 12);


}

function draw() {
  
  background (5);
  
  var dia = 120;
  
  for (var i = 0; i < 9000; i++)
  {
  strokeWeight (random (0.25, 0.7));
  var angle1 = random (TWO_PI), angle2 = random (TWO_PI);
    var p1 = new createVector (width/2 + cos (angle1) * dia, 450/2 + sin (angle1) * dia);
    var p2 = new createVector (width/2 + cos (angle2) * dia, 450/2 + sin (angle2) * dia);
    
    line (p1.x, p1.y, p2.x, p2.y);
  }
   
}

function mousePressed ()
{
  
  //saveFrame ("moon.jpg");
  redraw();
    

}   

function keyTyped(){
  if(key ===' '){
    man();
  }
}

function man(){
    
    fill(255);
  ellipse(width/2,650,40,40);
    
    fill(0);
  ellipse(width/2+10,640,5,5);
  ellipse(width/2-10,640,5,5);
  
  strokeWeight(2);
  line(width/2,670,width/2,710);
  
  line(width/2,710,width/2+10,720);
  
  line(width/2, 710, width/2-10, 720);
  
  line(width/2, 680,width/2+10, 700);
  
  line(width/2, 680,width/2-10, 700);

}