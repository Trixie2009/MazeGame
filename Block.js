class Block{
    constructor(x,y){
        this.x = x;
        this.y = y; 
        this.width = 50; 
        this.height = 15; 
    }
    draw(){
        fill("green")
        rect (this.x,this.y,this.width,this.height);

    }
}