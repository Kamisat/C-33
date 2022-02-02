const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world;

var balls = [];

var gameState = 0;

var ground, parede1, parede2, plataforma1, plataforma2, plataforma3;

function setup() {
  createCanvas(400, 600);
  engine = Engine.create();
  world = engine.world;

  plataforma1 = new Placas(200, 440, 150, 20);
  // plataforma2 = new Placas(100, 360, 20, 140);
  // plataforma3 = new Placas(300, 360, 20, 140);
  ground = new Placas(200, 600, 400, 60);
  parede1 = new Placas(0, 300, 30, 600);
  parede2 = new Placas(400, 300, 30, 600);
}

function draw() {
  background(255, 255, 255);
  fill("black");
  textSize(12);

  Engine.update(engine);

  if (gameState === 0) {
    text("Use o mouse para mover a plataforma horizontalmente", 90, 100);
    text("após iniciar.", 200, 120);
    // text("Mova lentamente, ou as bolas cairão da plataforma.", 100, 150);

    text("Aperte X para iniciar a dificuldade NORMAL.", 100, 200);
    text("Aperte Z para iniciar a dificuldade DIFÍCIL.", 100, 300);
    text("Aperte Y para iniciar a dificuldade MÁXIMA.", 100, 400);

    if (keyCode === 88) {
      gameState = 1;
      maxBalls = 36;
      keyCode = null;
    }

    if (keyCode === 90) {
      gameState = 1;
      maxBalls = 101;
      keyCode = null;
    }
    if (keyCode === 89) {
      gameState = 1;
      maxBalls = 201;
      keyCode = null;
    }
  }

  for (var i = 0; i < balls.length; i = i + 1) {
    balls[i].display();
    balls[i].lose();

    if (frameCount % 75 == 0) {
      //Matter.World.remove(world, balls[i])
      balls.pop([i]);
    }
  }

  if (gameState === 1) {
    if (frameCount % 75 === 0 && maxBalls > 0) {
      balls.push(new Ball(random(5, 395), 1));
      maxBalls = maxBalls - 1;
    }

    text("Use o mouse para mover a plataforma horizontalmente", 80, 100);
    text("após iniciar.", 200, 120);
    //text("Mova lentamente, ou as bolas cairão da plataforma.", 100, 150);
    text("Não deixe nenhuma bola cair para vencer.", 100, 200);

    if (maxBalls === 0) {
      gameState = 2;
    }

    text("Tempo: " + maxBalls, 300, 20);

    ground.display();
    parede2.display();
    parede1.display();
    plataforma1.display();
    /* plataforma2.display();
    plataforma3.display();*/
  }

  if (gameState === 2) {
    textSize(43);
    text("Vitória", 100, 150);
    textSize(12);
    text("Aperte X para iniciar a dificuldade NORMAL.", 100, 200);
    text("Aperte Z para iniciar a dificuldade DIFÍCIL.", 100, 300);
    text("Aperte Y para iniciar a dificuldade MÁXIMA.", 100, 400);

    if (keyCode === 88) {
      gameState = 1;
      maxBalls = 36;
      keyCode = null;
    }

    if (keyCode === 90) {
      gameState = 1;
      maxBalls = 101;
      keyCode = null;
    }
    if (keyCode === 89) {
      gameState = 1;
      maxBalls = 201;
      keyCode = null;
    }
  }
  //console.log();

  //console.log(balls);

  if (gameState === 3) {
    textSize(43);
    text("Derrota", 100, 150);
    textSize(12);
    text("Aperte X para iniciar a dificuldade NORMAL.", 100, 200);
    text("Aperte Z para iniciar a dificuldade DIFÍCIL.", 100, 300);
    text("Aperte Y para iniciar a dificuldade MÁXIMA.", 100, 400);
    text("Favor esperar as bolas desaparecerem para continuar.", 90, 500);

    if (keyCode === 88) {
      gameState = 1;
      maxBalls = 36;
      keyCode = null;
    }

    if (keyCode === 90) {
      gameState = 1;
      maxBalls = 101;
      keyCode = null;
    }
    if (keyCode === 89) {
      gameState = 1;
      maxBalls = 201;
      keyCode = null;
    }
  }

  console.log(frameCount);

  drawSprites();
}

function mouseDragged() {
  Matter.Body.setPosition(plataforma1.body, {
    x: mouseX,
    y: plataforma1.body.position.y,
  });
  /* Matter.Body.setPosition(plataforma2.body, {
    x: mouseX - 80,
    y: plataforma2.body.position.y,
  });
  Matter.Body.setPosition(plataforma3.body, {
    x: mouseX + 80,
    y: plataforma3.body.position.y,
  });*/
}
