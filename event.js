var fs = require("fs");
var rs = fs.createReadStream("./myfile.txt");
rs.on("open", function () {
  console.log("The file is open");
});
var events = require("events");
var eventEmitter = new events.EventEmitter();
var myEventHandler = function () {
  console.log("Welcome to Node Js Lab...!");
};
eventEmitter.on("welcome", myEventHandler);
eventEmitter.emit("welcome");
