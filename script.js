var ironManName = "Iron Man";
var hulkName = "Hulk";
var spidermanName = "Spider-man";
var thorName = "Thor";
var captainAmericaName = "Captain America";

var winnerName = localStorage.getItem("marvel-match-name");

if (winnerName !== null) {

  $.ajax({
    url:
      "https://gateway.marvel.com/v1/public/characters?name=" + winnerName + "&limit=1&apikey=7d5f2e35ee9376fda0cff9e664d68a3a",
    method: "GET",
  }).then(function (response) {
    var name = response.data.results[0].name;
    var bio = response.data.results[0].description;

    $("#name").text("Your match is: " + name + "!");
    $("#bio").text(bio);

    var giphyUrl = "http://api.giphy.com/v1/gifs/search?q=" + name + "&api_key=McNnA0Ed1ZNUtu6z0Svghy2Ku0i2rpAy&limit=1"

    $.ajax({
      url: giphyUrl,
      method: "GET",
    }).then(function (response) {
      console.log(response);
      console.log(response.data[0].images.fixed_height.url);
      var newImg = $("<img>").attr("src", response.data[0].images.fixed_height.url);
      $("#giphy").append(newImg);
    });
  });
}