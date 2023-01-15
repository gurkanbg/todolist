//jshint esversion:6
module.exports.getDate = getDate;

function getDate(){

let today = new Date();

let options = {
weekday: "long",
day: "numeric",
month: "long"
};
return today.toLocaleDateString("tr-TR", options);

};
module.exports.getDay = getDay;

function getDay(){

let today = new Date();

let options = {
weekday: "long",
};

return today.toLocaleDateString("tr-TR", options);
 
};

console.log(module.exports);
