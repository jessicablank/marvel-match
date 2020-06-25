var ironManName = "Iron Man";
var hulkName = "Hulk";
var spidermanName = "Spider-man";
var thorName = "Thor";
var captainAmericaName = "Captain America";

var winnerName = "";

winnerName = captainAmericaName;

$.ajax({
    url:
      "https://gateway.marvel.com/v1/public/characters?name="+ winnerName + "&limit=1&apikey=7d5f2e35ee9376fda0cff9e664d68a3a",
    method: "GET",
  }).then(function (response) {
    var name = response.data.results[0].name;
    var bio = response.data.results[0].description;

    $("#name").text(name);
    $("#bio").text(bio);
  });