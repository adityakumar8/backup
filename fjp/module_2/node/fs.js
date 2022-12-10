let fs = require("fs");
// console.log(fs);
let path = require("path");

// CRUD

let filePath = path.join(__dirname,"file.txt");
// console.log(filePath);

// C - Create
fs.writeFileSync(filePath,"Again writing on existing file"); //creates a file if file does not exist else it override.

// R - Read
console.log("before update");
let content = fs.readFileSync(filePath,'utf-8');
console.log(content);

// U - Update
fs.appendFileSync(filePath," "+"\nAppended text in the file");
console.log("after update");
console.log(fs.readFileSync(filePath,'utf-8'));

// D - Delete
fs.unlinkSync(filePath)