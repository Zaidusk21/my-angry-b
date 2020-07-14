class Bird {
  constructor(x, y, r,color){
    this.body=Bodies.circle(x,y,r);
    this.r=r;
    this.color=color;
    World.add(world,this.body);
    this.body.restitution=0.8;
    this.image=loadImage("sprites/bird.png");
  }
  show()
  {
    var angle=this.body.angle;
    push();
    fill(this.color);
    stroke("black");
    strokeWeight(3);
    ellipse(this.x,this.y,this.r,this.r);
    translate(this.body.position.x,this.body.position.y);
    rotate(angle);
   imageMode(CENTER);
   image(this.image,0,0,this.r,this.r);
    pop();
  }

};
