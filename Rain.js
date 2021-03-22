class Log extends BaseClass {
    constructor(x, y, height, angle) {
    super(x, y, 20, height, angle);
    this.image = loadImage("sprites/wood2.png");
    Matter.Body.setAngle(this.body, angle);
    var maxDrops = 100;
    for(var i=0; i<maxDrops; i++){
        drops.push(new CreateDrop(random (0,400), random(0,400)))
    }
    }
  
  };
  