var Dino = require('./../js/dino.js').dinoModule;

var responseDisplay = function (response) {
  $(".some-awesome-container").html(response);
};

$(document).ready(function() {
  $("form").submit(function() {
    event.preventDefault();
    var word = $("#word").val();
    var paragraph = $("#paragraph").val();
    var newDino = new Dino();
    newDino.dinoGenerator(word, paragraph, responseDisplay);
  });
});
