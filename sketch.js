var doodle; 
var b; 
var barr = []
var g; 
function preload(){
  jackImg = loadImage("jack.JPG")
}
function setup(){
createCanvas(500,700); 
doodle = new Doodle();
blockGroup = new Group();
 g = height/10
for(i = 1; i<10; i++){
  b = new Block (Math.round(random(50,width - 50)),height-i*g)
  barr.push(b)
}
rectMode(CENTER); 
}

function draw(){
  background("white")
  translate(0,width/2-doodle.y)
  doodle.draw();
  doodle.update();
  for(var i of barr){
    i.draw();
  }
if(doodle.y<barr[barr.length-1].y){
  barr.push(new Block(Math.round(random(50,width - 50)),barr[barr.length-1].y-g))
}


  drawSprites(); 
}

if(block.radius > doodle.radius){
  
}

function keyPressed(){
  if(keyCode === 32){
    doodle.jump();
  }
}