var censor = require('censorify');
console.log(censor.getCensoredWords());
console.log(censor.censor("Some very sad, bad and mad text"));
censor.addCensoredWord("gloomy");
console.log(censor.getCensoredWords());
console.log(censor.censor("A very gloomy day."));

// //Defining functions
// function prepare(ingredients, callback) {
//   console.log("Preparing " + ingredients);
//   callback();
// }

// //callback function
// function chop(){
//   console.log("Chopping");
// }

// //Calling the function
// prepare("onions and garlic", chop);

//Defining function
function prepare(ingredients, callback) {
  console.log("Preparing " + ingredients);
  callback();
}

//Calling the function
prepare("onions and garlic", function chop() {
  console.log("Chopping" );
});


const prepareTire = (instructions, callback) =>{
console.log("Getting ready to start", instructions);
callback();
}

prepareTire("Get the tire out to change", ()=> {
console.log("Changing");
});