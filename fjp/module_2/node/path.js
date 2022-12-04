let fs = require('fs');
let path = require('path');

let filepath =path.join(__dirname,"demo");
console.log(filepath);

// CREATING A DIRECTORY

if (!fs.existsSync("yes_Directory")) {
    fs.mkdirSync("Directory_is_created");
}

// // READ A DIRECTORY:

// let folderPath = __dirname;

// let contentOfFolder = fs.readdirSync(folderPath);
// console.log(contentOfFolder);

// DELETE A DIRECTORY

fs.rmdirSync("Directory_is_created");