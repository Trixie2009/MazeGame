class Doodle{
constructor(){
    this.x = width/2;
    this.y = height - 100; 
    this.height = 90
    this.width = 65 
    this.vy = 0 
}
draw(){
    image(jackImg, this.x, this.y, this.width, this.height)
}

update(){

    this.vy += 0.1 
    this.y = this.y+this.vy  

    if(keyDown("LEFT_ARROW")){
        this.x = this.x - 5
      }
      if(keyDown("RIGHT_ARROW")){
          this.x = this.x + 5
        }

        if(this.x > width){
            this.x = -this.width 
        }

        if(this.x+this.width < 0){
            this.x = width 
        }
}

jump(){
    this.vy = this.vy - 3 
}

}