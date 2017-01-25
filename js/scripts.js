var sump1 = 0;
var sump2 = 0;
var number1;
var number2;

var numGen = function() {
  var random = 6 * Math.random();
  var rounded = Math.round(random);
  number1 = rounded;
  number2 = rounded;
  if (rounded > 0) {
    return rounded;
  }
}

var sum1 = function() {
  sump1 = sump1 + numGen();
  return sump1;
}

var sum2 = function() {
  sump2 = sump2 + numGen();
  return sump2;
}

$(function() {

  $("#player1").submit(function(event) {
    event.preventDefault();

    $("#output1").text(sum1());
    $("#rollTotal ul").append("<li>" + number1 + "</li>");
    number1 = 0;
  });

  $("#player2").submit(function(event) {
    event.preventDefault();

    $("#output2").text(sum2());
    $("#rollTotal2 ul").append("<li>" + number2 + "</li>");
    number2 = 0;
  });

});
