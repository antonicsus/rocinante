var space;
var ship;
var cam;

var WORLD_SIZE = 16000; // shouldn't be < canvasSize

var CANVAS_SIZE = 800;
var BACK_COLOR = '#444';
var LINES_COLOR = 'white';
var STARS_COLOR = '#BBB';

function setup() {
  createCanvas(CANVAS_SIZE, CANVAS_SIZE).parent('animation');
  WORLD_SIZE -= WORLD_SIZE % CANVAS_SIZE;
  space = new tSpace(WORLD_SIZE, WORLD_SIZE);
  ship = new tShip();
  cam = new tCamera(width, height, 0, 0, space);
  noFill();
  stroke(LINES_COLOR);
  strokeWeight(2);
}

function draw() {
  background(BACK_COLOR);
  if (keyIsDown(LEFT_ARROW)) { ship.turn('left'); }
  if (keyIsDown(RIGHT_ARROW)) { ship.turn('right'); }
  if (keyIsDown(UP_ARROW)) { ship.thrust(); }
  ship.update();
  cam.show();
  cam.track(ship);
}
