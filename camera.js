function tCamera(sizeX, sizeY, posX, posY, space) {
  this.width = sizeX;
  this.height = sizeY;
  this.x = posX;
  this.y = posY;
}

tCamera.prototype.track = function(body) {
  this.x = body.x - this.width/2;
  this.y = body.y - this.height/2;
  body.showAt(this.width/2, this.height/2);
}

tCamera.prototype.show = function() {
  var objects = space.zone(this.x, this.y, this.width, this.height);
  for (n in objects) {
    objects[n].show();
  }
}
