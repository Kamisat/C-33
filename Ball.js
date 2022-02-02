class Ball {
  constructor(x, y) {
    var options = {
      restitution: 0.7,
      friction: 0.9,
      density: 1.0
    };

    this.body = Bodies.circle(x, y, 5, options);
    World.add(world, this.body);
  }

  display() {
    push();

    fill("purple");

    // rotate(angle);
    ellipseMode(RADIUS);
    var pos = this.body.position;
    //translate(pos.x, pos.y);
    ellipse(pos.x, pos.y, 5, 5);
    // console.log("ehe")

    pop();
  }

  lose() {
    if (this.body.position.y > 500) {
    gameState = 3;
   
    }
  }
}
