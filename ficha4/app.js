// var person = {name:"joana",age:"25",gender:"male"};

// var jsonPerson = JSON.stringify(person);
// console.log(jsonPerson)

var Emitter = require("./emitter");
var config = require("./config");

var emtr = new Emitter();
emtr.on(config.types.LOG, function(){
    console.log("this is a log listener")
});
emtr.on(config.types.LOG, function(){
    console.log("this is another log listener")
});
emtr.on(config.types.TEST, function(){
    console.log("this is a test listener")
});
emtr.emit(config.types.LOG);
emtr.emit(config.types.TEST);

var x=0;