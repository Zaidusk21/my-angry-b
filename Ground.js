class Ground {
    constructor(x, y, width, height,color){
     // var options={
       // isStatic:true
      //}
     
      this.body=Bodies.rectangle(x,y,width,height);
      this.width=width;
      this.height=height;
      this.color=color;
      this.body.isStatic=true;
      World.add(world,this.body);
  
    }
    show()
    {
      var angle=this.body.angle;
      push();
      fill(this.color);
      stroke("green");
      strokeWeight(4);
      translate(this.body.position.x,this.body.position.y);
      rotate(angle);
      rectMode(CENTER);
      rect(0,0,this.width,this.height);
      pop();
    }
  
  };
  