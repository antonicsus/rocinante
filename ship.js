function tShip() {
  this.x = random(WORLD_SIZE);
  this.y = random(WORLD_SIZE);
  this.angle = random(TWO_PI);
  this.vel = createVector(0, 0);
  this.acc = 0.04;
  this.turnAcc = 0.04;
  this.maxspeed = 6;
  this.radius = 32;
  this.nodes = rocinante;
  this.thrusting = false;
}

tShip.prototype.thrust = function() {
  this.thrusting = true;
  this.vel.x += this.acc*cos(this.angle);
  this.vel.y += this.acc*sin(this.angle);
  this.vel.limit(this.maxspeed);
}

tShip.prototype.turn = function(side) {
  if (side == 'left') {
    this.angle += this.turnAcc;
  } else if (side == 'right') {
    this.angle -= this.turnAcc;
  }
  this.angle %= TWO_PI;
}

tShip.prototype.calcForm = function(x, y, centerX, centerY) {
  var r = dist(0, 0, x, y);
  var angle = atan2(x, y) - this.angle;
  var newX = centerX + r*cos(angle) - this.radius*cos(this.angle);
  var newY = centerY + r*sin(angle) + this.radius*sin(this.angle);
  return [newX, newY];
}

tShip.prototype.borders = function() {
  if (this.x < 0) { this.x = WORLD_SIZE-1; }
  if (this.y < 0) { this.y = WORLD_SIZE-1; }
  if (this.x > WORLD_SIZE-1) { this.x = 0; }
  if (this.y > WORLD_SIZE-1) { this.y = 0; }
}

tShip.prototype.update = function() {
  this.vel.mult(0.9995);
  this.x += this.vel.x;
  this.y -= this.vel.y;
  this.borders();
}

tShip.prototype.showAt = function(posX, posY) {
  push();
  stroke(255);
  strokeWeight(2);
  //fill(LINES_COLOR);
  if (this.thrusting) {
    beginShape();
    for (i=-5; i <=5; i++) {
      var updated = this.calcForm(i, -random(17-abs(i*2)), posX, posY);
      vertex(updated[0], updated[1]);
    }
    endShape();
    this.thrusting = false;
  }
  fill(BACK_COLOR);
  beginShape();
  for (var loc in this.nodes) {
    var node = this.nodes[loc];
    var x = node[0];
    var y = node[1];
    var updated = this.calcForm(x, y, posX, posY);
    vertex(updated[0], updated[1]);
  }
  endShape(CLOSE);
  pop();
}

var rocinante = [
  [3, 60],
  [3, 61],
  [4, 60],
  [4, 56],
  [6, 50],
  [6, 42],
  [9, 40],
  [9, 30],
  [6, 27],
  [6, 20],
  [7, 20],
  [7, 12],
  [4, 10],
  [5, 4],
  [5, 0],
  // center
  [-5, 0],
  [-5, 4],
  [-4, 10],
  [-7, 12],
  [-7, 20],
  [-6, 20],
  [-6, 27],
  [-9, 30],
  [-9, 40],
  [-6, 42],
  [-6, 50],
  [-4, 56],
  [-4, 62],
  [-3, 63],
  [-3, 60],
];
