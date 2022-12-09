// "/home/user/Frontend Practice/fjp/module_2/node/path.js"

let path = require("path");
// console.log(path);

// let extensionName = path.extname("/home/user/Frontend Practice/fjp/module_2/node/tst.py");
// let extensionName = path.extname(__filename);
// console.log(extensionName);

// let baseName = path.basename("/home/user/Frontend Practice/fjp/module_2/index.html");

let baseName = path.basename(__filename);
console.log(baseName);

// console.log(__dirname);
console.log(__filename);
 let dirPath = __dirname;
 console.log(dirPath);

 let newFilePath = path.join(dirPath,"test.js");
 console.log(newFilePath);