function Dino(){
}

Dino.prototype.dinoGenerator = function (word, paragraph, displayFunction) {
  $.get('http://dinoipsum.herokuapp.com/api/?format=html&words=' + word + '&paragraphs=' + paragraph).then(function (response) {
    displayFunction(response);
    console.log(response);
  }).fail(function(error) {
    $('.some-awesome-container').text(error.responseJSON.message);
  });
};

exports.dinoModule = Dino;
