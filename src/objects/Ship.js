'use strict';

var config = require('../config');

function Ship(game, x, y) {
  //Initialize graphics;
  Phaser.Sprite.call(this, game, x, y, 'ship');
  this.anchor.set(0.5, 0.5);

  //Initialize physics
  game.physics.enable(this);
  this.checkWorldBounds = false;
  this.body.collideWorldBounds = false;
  this.body.immovable = true;
  this.body.bounce.set(1);

}

Ship.prototype = Object.create(Phaser.Sprite.prototype);
module.exports = Ship.prototype.constructor = Ship;

Ship.prototype.reset = function () {
  this.angle = -90;
  this.anchor.set(0.5, 0.5);

};
