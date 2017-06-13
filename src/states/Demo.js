/*
 * Game state
 * ==========
 *
 * A sample Game state, displaying the Phaser logo.
 */

'use strict';

var config = require('../config');

exports.create = function (game) {
  // var x = game.world.centerX;
  // var y = game.world.centerY;
  this.startDemo(game);
};

exports.startDemo = function (game) {
  // this.ballSprite.visible = false;
  // game.time.events.add(Phaser.Timer.SECOND * config.ballStartDelay, this.startBall, this);
  // game.input.onDown.add(this.startGame, this);
};

exports.startBall = function () {
  // this.ballSprite.visible = true;
  // var randomAngle = this.rnd.pick(config.ballRandomStartingAngle);
  // this.ballSprite.update(randomAngle, config.ballVelocity);
};

exports.startGame = function () {
  this.state.start('Game');
};

exports.update = function() {};
