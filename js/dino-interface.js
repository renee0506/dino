var Dino = require('./../js/dino.js').dinoModule;
var getImage = require('./../js/image.js').imageModule;
var getWiki = require('./../js/wiki.js').wikiModule;

var responseDisplay = function (response) {
  $(".some-awesome-container").html(response);
};

var imageDisplay = function (imageUrl) {
  $(".some-awesome-img").html('<img src=' + imageUrl +'>');
};

var textDisplay = function (text) {
  $(".some-awesome-text").text(text);
};



$(document).ready(function() {
  $("form").submit(function() {
    event.preventDefault();
    var word = $("#word").val();
    var paragraph = $("#paragraph").val();
    var newDino = new Dino();
    newDino.dinoGenerator(word, paragraph, responseDisplay, getImage, imageDisplay, getWiki, textDisplay);
  });
});
