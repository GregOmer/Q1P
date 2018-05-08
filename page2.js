$(document).ready(function(){
    $('select').formSelect();

console.log('ready')


// the following 10-12 lines extract zip code from URL.
let long = location.search
let newString = ''
let cleaned = 0
function cleanZip(str){
  for(let i = 0; i < str.length; i++){
    if(!isNaN(str[i])){
    newString += str[i]
    }
  }
  cleaned = newString
}
cleanZip(long)
// end of URL extract
let zip = newString;
// console.log(zip)
let apiCall = `http://api.openweathermap.org/data/2.5/weather?zip=${zip},us&APPID=1c42411565979c568dda2e113b3b745a`
// console.log(apiCall)
$.getJSON(apiCall).then(function(result){
  console.log(result)
  console.log("city = " + result.name)
  console.log("weather = " + result.weather["0"].description)
  console.log("date = " + result.dt)
});
});
