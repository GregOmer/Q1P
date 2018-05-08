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
  console.log(newString)
}
cleanZip(long)
// end of URL extract

});
