var box = document.querySelector('#nasa');
var request = new XMLHttpRequest();
request.onreadystatechange = function() {
  if (this.readyState == XMLHttpRequest.DONE && this.status == 200){
    var response = JSON.parse(this.responseText);
    console.log(response);
   
    var explanation = response.explanation;
    var title = response.title;
    var url = response.url;
    var HtmlToInject= '<figure><img src="' + url + '" class="cropped" alt="Nasa picture of the day">';
    HtmlToInject += '<figcaption><h2>Image NASA du jour: '+ title +'</h2><p class="justify">'+ explanation +'</p></figcaption></figure>';
    box.innerHTML = HtmlToInject;
  }
}
request.open("GET", "https://api.nasa.gov/planetary/apod?api_key=qK7slCT6DieVVQZXt4pkwVJL5keAkhwMKXj5FKhe ");
request.send();