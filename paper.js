class Paper {
    constructor(x, y, width, height, diameter) {
      var options = {
          isStatic:false,
          'restitution':0.8,
          'friction':0.3,
          'density':1.0
      }
      
      this.body = Bodies.circle(x, y, width, height,diameter,options);
      this.diameter = diameter;
      this.height = height;
      this.width = width;
      
      this.image = loadImage("paper.png")

      World.add(world, this.body);
    }
    display(){
      var pos=this.body.position;
      push();
      translate(pos.x,pos.y);
      fill("gray");
      //circle(0,0, this.diameter)
      image(this.image,0,0,this.width,this.height,this.diameter)
      pop(); 
    }
  }