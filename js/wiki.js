var getWiki = function(searchParam, textDisplay) {
  $.ajax( {
    url: "https://en.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&exintro=&explaintext=&titles=" + searchParam,
    data: "{body}",
    dataType: 'json',
    headers: { 'Api-User-Agent': 'MyCoolTool/1.1 (https://example.org/MyCoolTool/; MyCoolTool@example.org) BasedOnSuperLib/1.4' },
    type: 'POST',
    success: function(data) {
      var value = Object.keys(data.query.pages);
      textDisplay(data.query.pages[value].extract);
    }
  });
};

exports.wikiModule = getWiki;
