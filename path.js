const path = require("path");
console.log("File Name: \n" + __filename + "\n\n");
console.log("Directory Name: \n" + __dirname + "\n\n");
console.log("Base Name of File Name: \n" + path.basename(__filename) + "\n\n");
console.log(
  "Base Name of Directory Name:\n" + path.basename(__dirname) + "\n\n"
);
var data = path.parse(__filename);
console.log("Parser Data: \n");
console.log(data);
console.log("\n\n");
console.log("isAbsolute for __filename: " + path.isAbsolute(__filename) + "\n");
console.log(
  "isAbsolute for given relative file : " + path.isAbsolute("./os.js") + "\n"
);
console.log(path.join("MGIT", "ET", "CSM and CSD"));
console.log(path.join("/MGIT", "ET", "CSM and CSD"));
console.log(path.join("/MGIT", "//ET", "CSM and CSD"));
console.log(path.join("/MGIT", "//ET", "../CSM and CSD"));
console.log(path.join(__dirname, "CSM and CSD"));
