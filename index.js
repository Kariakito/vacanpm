const info = require('./information.js');

console.log(info);

var cowsay = require ("cowsay");

const person = { name:"Pilar"};

console.log(info);

console.log(cowsay.say({
    text : "Hello I'm" + " " + info.name + " " + "from" + " " + info.campus + " " + "Campus!"  ,
    e : "oO",
    T : "U "
}));

