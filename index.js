var quotes = []
var favorites = []
function showFavorites (){
  document.getElementById("favs").innerHTML = "";
  for (let i =  0; i<favorites.length ; i++) {
    function removeFromFavorites (){
      favorites.splice(i,1)
      showFavorites()
    }
    var fav_li = document.createElement("li");
    var fav_text = document.createTextNode(favorites[i].text);
    fav_li.appendChild(fav_text)
    var delIcon= document.createElement('i');
    delIcon.addEventListener("click", removeFromFavorites);
    delIcon.classList.add('fa-solid');
    delIcon.classList.add('fa-trash');
    fav_li.appendChild(delIcon);
    document.getElementById("favs").appendChild(fav_li);
    }
}
showFavorites ()



fetch("https://type.fit/api/quotes")
  .then(function(response) {
            return response.json();
        })
  .then(function(data) {
    quotes = data
    const newQuotees = document.getElementById("item-list");
    for (let i =  0; i<quotes.length ; i++) {
      function addToFavorites(){
        favorites.push(quotes[i])
        showFavorites ()
      }
      
      var li = document.createElement("li");
      var text = document.createTextNode(quotes[i].text);
      li.appendChild(text);
      var favIcon= document.createElement('i');
      favIcon.addEventListener("click", addToFavorites);
      favIcon.classList.add('fa');
      favIcon.classList.add('fa-star-o');
      li.appendChild(favIcon);
      li.classList.add('list-group-item');
      document.getElementById("item-list").appendChild(li);
      

  }
  });

  const togglePassword = document.getElementById('togglePassword');
const password = document.getElementById('password');

togglePassword.addEventListener('click', function (e) {
    let type = password.getAttribute('type');
    if (type === 'password'){
        type = 'text'
    }
    else{
        type = 'password'
    }
    password.setAttribute('type', type);
    this.classList.toggle('fa-eye-slash');
});
  

