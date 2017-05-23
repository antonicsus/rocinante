function tSpace(w, h) {
  this.width = w;
  this.height = h;
  this.areaSize = CANVAS_SIZE / 2;
  this.areas = [];
  this.wk = this.width / this.areaSize;
  this.hk = this.height / this.areaSize;

  for (j=0; j<this.hk; j++) {
    for (i=0; i<this.wk; i++) {
      var thisArea = new tSpaceArea(this.areaSize, i*this.areaSize, j*this.areaSize);
      // do not try using LOOP
      thisArea.objects.push(new tStaticObject(random(this.areaSize), random(this.areaSize)));
      thisArea.objects.push(new tStaticObject(random(this.areaSize), random(this.areaSize)));
      thisArea.objects.push(new tStaticObject(random(this.areaSize), random(this.areaSize)));
      this.areas.push(thisArea);
    }
  }
}

tSpace.prototype.zone = function(posX, posY, sizeX, sizeY) {
  var startX = floor(posX / this.areaSize);
  var startY = floor(posY / this.areaSize);
  var stepsX = floor(sizeX / this.areaSize);
  var stepsY = floor(sizeY / this.areaSize);

  var dX = posX - this.areas[this.wk*startY+startX].x;
  var dY = posY - this.areas[this.wk*startY+startX].y;

  var objects = [];

  for (j=0; j<=stepsY; j++) {
    for (i=0; i<=stepsX; i++) {
      var curX = (startX+i < this.wk) ? (startX+i) : (startX+i - this.wk);
      var curY = (startY+j < this.hk) ? (startY+j) : (startY+j - this.hk);
      var areaObjects = this.areas[this.wk*curY+curX].objects;
      for (n in areaObjects) {
        var orig = areaObjects[n];
        var obj = new tStaticObject(orig.x, orig.y, orig.lines);
        obj.x += i*this.areaSize - dX;
        obj.y += j*this.areaSize - dY;
        objects.push(obj);
      }
    }
  }
  return objects;
}

function tSpaceArea(size, x, y) {
  this.size = size;
  this.x = x;
  this.y = y;
  this.objects = [];
}

function tStaticObject(posX, posY, lines) {
  this.x = posX;
  this.y = posY;
  this.lines = lines || [[0, 0]];
}

tStaticObject.prototype.show = function() {
  for (n in this.lines) {
    if (this.lines[n].length <= 2) {
      point(this.x + this.lines[n][0], this.y + this.lines[n][1]);
    } else {
      line(this.x + this.lines[n][0], this.y + this.lines[n][1], this.x + this.lines[n][2], this.y + this.lines[n][3]);
    }
  }
}
