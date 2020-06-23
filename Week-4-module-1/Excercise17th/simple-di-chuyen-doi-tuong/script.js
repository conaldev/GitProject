function Hero(image, top, left, size) {
  this.image = image;
  this.top = top;
  this.left = left;
  this.size = size;
  this.speed = 50;

  this.getHeroElement = function () {
    return '<img width="' + this.size + '"' +
        ' height="' + this.size + '"' +
        ' src="' + this.image + '"' +
        ' style="top: ' + this.top + 'px; left:' + this.left + 'px;position:absolute;" />';
  }

  this.moveRight = function () {
    this.left += this.speed;
  }
  this.moveDown = function () {
    this.top += this.speed;
  }
  this.moveLeft = function () {
    this.left -= this.speed;
  }
  this.moveUp = function () {
    this.top -= this.speed;
  }
  this.setSpeed = function (speed) {
    this.speed = speed;
  }


}
let image = "pikachu.png"
let hero = new Hero(image, 0, 0, 200);

function start() {
  if (hero.left < window.innerWidth - hero.size && hero.top <= 0) {
    hero.moveRight();
    console.log('left' + hero.left);
  }
  if (hero.left >= window.innerWidth - hero.size ) {
    hero.moveDown();
    console.log('top' + hero.top);
  }
  if (hero.left >= 0 && hero.top >= window.innerHeight -hero.size) {
    hero.moveLeft();
    console.log('left' + hero.left);
  }
  if (hero.left <= 0 && hero.top >= 0) {
    hero.moveUp();
    console.log('top' + hero.top);
  }

  document.getElementById('game').innerHTML = hero.getHeroElement();
  setTimeout(start, 200);
}

start();