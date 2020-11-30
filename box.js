class box {
    constructor(x,y,width,height){
        var options = {
            restitution:0.8,
            friction: 1,
            density: 1
          }
        this.body = Bodies.rectangle(x,y,width,height,options);
        this.width = width;
        this.height = height;
        World.add(world,this.body);
      
    }
    display(){
        var angle;
        angle = this.body.angle;
        var pos;
        pos = this.body.position;
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        rectMode(CENTER);
        strokeWeight(4) 
        stroke("orange");
        fill("red");
        rect(0,0,this.width,this.height);
        pop();
    }
}
