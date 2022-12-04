// "/home/user/Frontend Practice/fjp/module_2/node/path.js"

let path = require("path");
// console.log(path);

let extensionName = path.extname("/home/user/Frontend Practice/fjp/module_2/node/tst.py");
console.log(extensionName);

let baseName = path.basename("/home/user/Frontend Practice/fjp/module_2/index.html");
console.log(baseName);

console.log(__dirname);
console.log(__filename);