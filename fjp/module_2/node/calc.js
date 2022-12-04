let calc = require('child_process');
// console.log(calc);

let content = calc.execSync("gnome-calculator");

console.log("" + content);