class Placas {
    constructor(x,y,width,height){
      var options = {
          isStatic: true,
          restitution: 0.7,
          friction: 0.9,
          density: 7.0
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      World.add(world, this.body);

      
  }

  display(){
    push();
    var angle = this.body.angle;
    var pos =this.body.position;
  rotate(angle)
    rectMode(CENTER);
    fill("red");
    rect(pos.x, pos.y, this.width, this.height);
    pop();
  }


}
