var currentRoll = 0;
var totalRoll = 0;
var random = 0;

var currentRoll2 = 0;
var totalRoll2 = 0;
var random1 = 0;

var placeHolder = 0;
var placeHolder2 = 0;


function Player(currentRoll, totalRoll) {
  this.currentRoll = currentRoll;
  this.totalRoll = totalRoll;
}

function Player2(currentRoll2, totalRoll2) {
  this.currentRoll = currentRoll2;
  this.totalRoll = totalRoll2;
}

Player.prototype.processingCurrent = function() {
  if (random > 1) {
   currentRoll += random;

 } else {
   alert("You've rolled 1")
   placeHolder = currentRoll;
   currentRoll = 0;
 }
}

Player.prototype.processingTotal = function() {
  if (random > 1) {
   totalRoll += random;

 } else {
   totalRoll -= placeHolder;

 }
}

Player2.prototype.processingCurrent2 = function() {
  if (random1 > 1) {
   currentRoll2 += random1;

 } else {
   alert("You've rolled 1")
   placeHolder2 = currentRoll2;
   currentRoll2 = 0;
 }
}

Player2.prototype.processingTotal2 = function() {
  if (random1 > 1) {
   totalRoll2 += random1;

 } else {
   totalRoll2 -= placeHolder2;

 }
}


$(function() {

  $(".player1").submit(function(event) {
    event.preventDefault();

    random = Math.floor(Math.random() * 6 + 1);
    var player1 = new Player(currentRoll, totalRoll);

    player1.processingCurrent();
    player1.processingTotal();

      $("#currentRoll").text(currentRoll);

    });

  $("#player2").submit(function(event) {
    event.preventDefault();

    random1 = Math.floor(Math.random() * 6 + 1);
    var player2 = new Player2(currentRoll2, totalRoll2);

    player2.processingCurrent2();
    player2.processingTotal2();

      $("#currentRoll2").text(currentRoll2);

  });

  $("#hold1" ).click(function() {
    $("#totalRoll").text(totalRoll);
    currentRoll = 0;
  });

  $("#hold2").click(function() {
    $("#totalRoll2").text(totalRoll2);
    currentRoll2 = 0;
  });

});
