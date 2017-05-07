var space;
var ship;
var cam;

var WORLD_SIZE = 16000; // + canvasSize == actual size
                        // but for can not be > canvas, actually > 1600
                        // should be reworked, maybe

var BACK_COLOR = '#444';
var LINES_COLOR = 'white';
var STARS_COLOR = '#BBB';

function setup() {
  createCanvas(800, 800).parent('animation');
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
