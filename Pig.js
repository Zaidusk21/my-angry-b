class Pig {
    constructor(x, y){
      var options={
       restitution:0.8,
       density:0.6,
       friction:0.9
  
      }
      this.body=Bodies.rectangle(x,y,50,50,options)
      this.width=50;
      this.height=50;
      this.image=loadImage("sprites/enemy.png");
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
  