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

// the following populates api with zip code and execs a pi call
let zip = newString;
// console.log(zip)
let apiCall = `http://api.openweathermap.org/data/2.5/weather?zip=${zip},us&APPID=1c42411565979c568dda2e113b3b745a`
// console.log(apiCall)
let apiTime = ''
$.getJSON(apiCall).then(function(result){
  console.log(result)
  //append and stuff goes in here to make result populate dynamically
  city = result.name
  console.log("city = " + result.name)
  apiWeather = result.weather["0"].description
  currTime = new Date();
  console.log("time = "+currTime)
  hour = currTime.getHours();
  console.log("hour = " + hour)
  // console.log("weather = " + result.weather["0"].description)

  // console.log("date = " + result.dt)

  function epochToJsDate(ts){
    let apiTime = new Date(ts*1000);
    // console.log("selfset = " +apiTime)
  }
  epochToJsDate(result.dt)

  //////////////////////////////////////////

let weather = ''

    if(apiWeather.includes("clear")=== true){
      weather = "clear sky"
      console.log("weather key = " + weather)
    }
    else if(apiWeather.includes("cloud")===true){
      weather = "cloud"
      console.log("weather key = " + weather)
    }
    else if(apiWeather.includes("rain")===true){
      weather = "rain"
      console.log("weather key = " + weather)
    }
    else if(apiWeather.includes("thunder")===true){
      weather = "thunderstorm"
      console.log("weather key = " + weather)
    }
    else if(apiWeather.includes("sno")===true){
      weather = "snow"
      console.log("weather key = " + weather)
    }
    else if(apiWeather.includes("mis")===true){
      weather = "mist"
      console.log("weather key = " + weather)
    }

////////////////////////////////////////////////

let time = ''


  if(hour < 7){
    time = "late night"
    console.log("it is now "+time);
  }
  else if((hour > 6) && (hour < 12)){
    time = "morning"
    console.log("it is now "+time);
  }
  else if((hour > 11) && (hour < 19)){
    time = "afternoon"
    console.log("it is now "+time);
  }
  else if((hour > 18) && (hour < 24)) {
    time = "night"
    console.log("it is now "+time);
  }

////////////////////////////////////////////////

  let spirits = [

    {
      name : "Lager",
      base : "light beer",
      time : ['morning', "afternoon", "night", "late night"],
      weather : ["rain", "clear sky"],
      ingredients : ['fermented grain', 'hops', 'yeast', 'water'],
      garnish : "none",
      img : "SmallDrinks/SmBeer.jpg"
    },
    {
    name : "Manhattan",
    base : "bourbon",
    time : ["afternoon", "night", "late night"],
    weather : ["rain", "clear sky"],
    ingredients : ["bourbon", 'sweet vermouth', 'bitters'],
    garnish : "cherry",
    img : "SmallDrinks/SmManhattan.jpeg"
    },

    {
    name : "Hot Toddy",
    base : ["bourbon", "whiskey", "scotch", "whisky"],
    time : ["afternoon", "night"],
    weather: ['snow', 'rain', 'mist', 'cloud'],
    ingredients : ["bourbon", 'lemon juice', 'honey', 'water'],
    garnish : ["cinnamon stick", "star anise", "lemon"],
    img : "SmallDrinks/SmHotToddy.jpg",
    },

    {
    name : "Irish Coffee",
    base : ["irish whiskey", "whiskey", "whisky"],
    time : ['morning', 'afternoon'],
    weather : ['snow', 'rain', 'mist', 'cloud'],
    ingredients : ["irish whiskey", 'sugar', 'espresso', 'hot water'],
    garnish : ["brown sugar", "whipped cream"],
    img : "SmallDrinks/SmIrishCoffee.jpeg"
  },

    {
      name : "Shot",
      base : "any liquor you choose",
      time : ["afternoon", "night", "late night"],
      weather: "thunderstorm",
      ingredients : "distilled spirit",
      garnish : ["salt", "sugar", "lime"],
      img : "SmallDrinks/SmShot.jpg",
      }
    ];


    function selector(array){
      let result = []
      let ingreds = []
      let garni = []
      let image = []
      for(let i = 0; i < array.length; i++){
        if(spirits[i].weather.includes(weather)
        && spirits[i].time.includes(time)){
        result.push(spirits[i].name);
        ingreds.push(spirits[i].ingredients);
        garni.push(spirits[i].garnish);
        image.push(spirits[i].img);
        // $("#Iresult0").background = spirits[i].img;

        }
      }
      console.log( "drink selection = " + result +
            " || ingredients = " + ingreds +
            " || garnish = " + garni)

      // return "drink selection = " + result +
      //       " || ingredients = " + ingreds +
      //       " || garnish = " + garni;
    }

    selector(spirits)





  // convert epoch to hour format

// $( document ).ready(function() {
//     SetImage();
//     window.setInterval(SetImage,60000);
// });
//
// function SetDate(){
//     let nowdate = new Date() ;
//
//     let morning = new Date();
//     morning.setHours(5);
//     morning.setMinutes(30);
//
//     let afternoon = new Date();
//     afternoon.setHours(12);
//     afternoon.setMinutes(00);
//
//     let night = new Date();
//     night.setHours(19);
//     night.setMinutes(00);
//
//     let late_night = new Date();
//     late_night.setHours(24);
//     late_night.setMinutes(00);
//
//     if(morning < nowdate  && nowdate < afternoon){
//         // $('#morning').show();
//         // $('#night').hide();
//         // $('#night').hide();
//         // $('#night').hide();
//     }
//     else if(afternoon < nowdate && nowdate < night){
//         // $('#night').show();
//         // $('#day').hide();
//         // $('#night').hide();
//         // $('#night').hide();
//     }
//     else if(night < nowdate && nowdate < late_night){
//
//
//
//     }
//     else{
//
//     }
// }


});
});


// the following is for a temperature tool

// function convertk2f(kelv){
//   console.log(humanTemp = 9 / 5 * (kelv - 273) + 32)
//   console.log("temp = "+humanTemp)
//   return 9 / 5 * (kelv - 273) + 32
// }
// convertk2f(result.main.temp)
