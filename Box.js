class Box {
  constructor(x, y, width, height){
    var options={
     restitution:0.4,
     friction:1.0,
     density:0.6

   }
    this.image=loadImage("sprites/wood1.png");
    this.body=Bodies.rectangle(x,y,width,height,options);
    this.width=width;
    this.height=height;
   
    World.add(world,this.body);
    
  }
  show()
  {
    var angle=this.body.angle;
    push();
    
    translate(this.body.position.x,this.body.position.y);
    rotate(angle);
    imageMode(CENTER);
    image(this.image,0,0,this.width,this.height);
    pop();
  }

};
