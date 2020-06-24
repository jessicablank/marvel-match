$.ajax({
    url:
      "https://gateway.marvel.com:443/v1/public/characters?name=Iron%20Man&limit=1&apikey=7d5f2e35ee9376fda0cff9e664d68a3a",
    method: "GET",
  }).then(function (response) {
    console.log(response);
  });