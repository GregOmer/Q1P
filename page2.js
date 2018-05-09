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

// the following populateas api with zip code and execs api call
let zip = newString;
// console.log(zip)
let apiCall = `http://api.openweathermap.org/data/2.5/weather?zip=${zip},us&APPID=1c42411565979c568dda2e113b3b745a`
// console.log(apiCall)
$.getJSON(apiCall).then(function(result){
  console.log(result)
  city = result.name
  console.log("city = " + result.name)
  weather = result.weather["0"].description
  console.log("weather = " + result.weather["0"].description)
  console.log("date = " + result.dt)


  // convert epoch to hour format
  function epochToJsDate(ts){
    let date = new Date(ts*1000);
    console.log(date)
  }
  epochToJsDate(result.dt)

  function convertk2f(kelv){
    console.log(humanTemp = 9 / 5 * (kelv - 273) + 32)
    console.log("temp = "+humanTemp)
    return 9 / 5 * (kelv - 273) + 32
  }
  convertk2f(result.main.temp)
/*
let spirits = [

  {
  name : "Manhattan",
  base : "bourbon",
  time : ["afternoon", "night"],
  weather : ["rain", "clear sky"],
  ingredients : ["bourbon", 'sweet vermouth', 'bitters'],
  garnish : "cherry"
  },

  {
  name : "Lager",
  base : "light beer",
  time : ['morning', "afternoon", "night"],
  weather : ["rain", "clear sky"],
  ingredients : ['fermented grain', 'hops', 'yeast', 'water'],
  garnish : "none"
  },

  {
  name : "Shot",
  base : "any liquor you choose",
  time : ["afternoon", "night"],
  weather: "thunderstorm",
  ingredients : "distilled spirit",
  garnish : ["salt", "sugar", "lime"]
  },

  {
  name : "Hot  Toddy",
  base : ["bourbon", "whiskey", "scotch", "whisky"],
  time : ["afternoon", "night"],
  weather: ['snow', 'rain', 'mist'],
  ingredients : ["bourbon", 'lemon juice', 'honey', 'water'],
  garnish : ["cinnamon stick", "star anise", "lemon"]
  },

  {
  name : "Irish Coffee",
  base : ["irish whiskey", "whiskey", "whisky"],
  time : ['morning', 'afternoon'],
  weather : ['snow', 'rain', 'mist'],
  ingredients : ["irish whiskey", 'sugar', 'espresso', 'hot water'],
  garnish : ["brown sugar", "whipped cream"]

  }];


  function selector(array){
    let result = []
    for(let i = 0; i < array.length; i++){
      if(spirits[i].weather.includes('thunderstorm')
      && spirits[i].time.includes('night')){
      result.push(spirits[i])
      }
    }
    return result;
  }
  selector(spirits)

*/

});
});
