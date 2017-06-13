/*
 * Game state
 * ==========
 *
 * A sample Game state, displaying the Phaser logo.
 */

'use strict';

var config = require('../config');
var Ship = require('../objects/Ship');

exports.create = function (game) {
  // TODO: Replace this with a really cool game code here :)
  var x = game.world.centerX;
  var y = game.world.centerY;
  this.ship = game.add.existing(new Ship(game, x, y));
  this.startGame();
};

exports.startGame = function () {};

exports.resetShip = function () {
  this.ship.reset();
};

exports.update = function () {};
