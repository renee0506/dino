function Dino(){
}

Dino.prototype.dinoGenerator = function (word, paragraph, displayFunction, imageFunction, imgDisplay, getWiki, textDisplay) {
  $.get('http://dinoipsum.herokuapp.com/api/?format=json&words=' + word + '&paragraphs=' + paragraph).then(function (response) {
    displayFunction(response[0][0]);
    imageFunction(response[0][0], imgDisplay);
    getWiki(response[0][0], textDisplay);
  }).fail(function(error) {
    $('.some-awesome-container').text(error.responseJSON.message);
  });
};

exports.dinoModule = Dino;
