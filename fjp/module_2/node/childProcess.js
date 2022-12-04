let cp = require('child_process');
// console.log(cp);

// open claculator with the help of this file.
// for windows replace gnome-calculator with calc
// cp.execSync("gnome-calculator");

// open vscode with chidProcess
// cp.execSync("code");
let contentN = cp.execSync("node test.js"); // to get output from node file.
let contentP = cp.execSync("python3 tst.py"); // to get output from python file.
console.log("output form test.js is: "+ contentN);
console.log("output from tst.py is: "+contentP);