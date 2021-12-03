document.getElementById('btn-search').addEventListener("click", ev => {
    ev.preventDefault();
});
function sendApi() {
    var userInput =
document.getElementById('searchText').value
console.log(userInput);

var giphyApiKey = "XtHkRU31WHHyqyBBBkLrmJgQdtkGIoZD"
var LIMIT = 25;
var giphyApiURL = `https://api.giphy.com/v1/gifs/search?api_key=${giphyApiKey}&q=${userInput}&limit=${LIMIT}&offset=0&rating=g&lang=en`

fetch(giphyApiURL).then(function(data){
    return data.json()
})
.then(function(json){
  console.log(json.data[0].images.fixed_height.url)
    var imgPath = json.data[0].images.fixed_height.url
    var img = document.createElement("img");
    img.setAttribute("src", imgPath);
    img.setAttribute("class", "giphy-container");
    document.body.appendChild(img);
})
.catch(err => {
    console.log("Not Found")
})
}




