class ground extends baseclass{
 constructor(x,y,width,height){
  super(x,y,width,height);
  var options = {
    
    isStatic: true

    
  }
  this.body=Bodies.rectangle(x,y,width,height,options)
   this.image = loadImage("sprites/ground.png");
 }
  
}

