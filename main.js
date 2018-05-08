

$(document).ready(function(){
    $('select').formSelect();

console.log('ready')
//M.AutoInit();
  // var elems = document.querySelectorAll('.carousel');
  //  // var instances = M.Carousel.init(elems);
  //  var instances = M.Carousel.init(elems, {
  //    fullWidth: true
  //  });
$('.parallax').parallax();

var slideIndex = 1;
// carousel()

  function carousel() {
    var i;
    var x = document.getElementsByClassName("carouselPics");
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > x.length) {slideIndex = 1}
    x[slideIndex-1].style.display = "block";
    setTimeout(carousel); 3000// Change image every x seconds
  }
carousel()
});

// var instance = M.Carousel.init({
//   fullWidth: true
// });

let submitButton = document.getElementById("btn");

submitButton.addEventListener ("click", function(){

  let zip = $('#zipField').val();
  // console.log(zip)
  let apiCall = `http://api.openweathermap.org/data/2.5/weather?zip=${zip},us&APPID=1c42411565979c568dda2e113b3b745a`
  // console.log(apiCall)
  $.getJSON(apiCall).then(function(result){
    console.log("city = " + result.name)
    console.log("weather = " + result.weather["0"].description)
    console.log("date = " + result.dt)


//let ts = result.dt
function epochToJsDate(ts){
  // ts = epoch timestamp
  // returns date obj
  console.log(new Date(ts*1000))
  return new Date(ts*1000);
  //console.log(Date)
}
epochToJsDate(result.dt)


});
});
