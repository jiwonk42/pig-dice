var currentRoll = 0;
var totalRoll = 0;
var random = 0;

var placeHolder = 0;


function Player(currentRoll, totalRoll) {
  this.currentRoll = currentRoll;
  this.totalRoll = totalRoll;
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

  });

  $("#hold1" ).click(function() {
    $("#totalRoll").text(totalRoll);
    currentRoll = 0;
  });
});
