const os = require("os");
console.log("Data Retreived by Using OS Module in Node Js.\n");
console.log("Hostname: " + os.hostname() + "\n");
console.log("Architecture: " + os.arch() + "\n");
console.log("OS Platform: " + os.platform() + "\n");
console.log("OS Type: " + os.type() + "\n");
var freeMemory = os.freemem();
console.log(
  "Free RAM: " + Math.round(freeMemory / 1024 / 1024 / 1024) + " GB\n"
);
var totalMemory = os.totalmem();
console.log(
  "Total RAM: " + Math.round(totalMemory / 1024 / 1024 / 1024) + " GB\n"
);
