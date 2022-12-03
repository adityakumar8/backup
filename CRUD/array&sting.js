// empty array
let arr = [];
console.log(arr);

// array with elements

let eArray = [1,2,3,4,5,"Hello I am new in javaScript",true,'c',4.5];
console.log("Element on 0th index is:"+eArray[0]);
eArray[3] = "nothing";
console.log(eArray);


// STRING

let str = "Hey all I am Aditya Kumar learning javaScript";
console.log(str);

// lenght of string

let len = str.length;
console.log(len);

//sliced method 

let slicedStr = str.slice(0,10); 
console.log(slicedStr);

// replaced method 

let replacedStr = str.replace("all", "everyone");
console.log(replacedStr);

//UPPER CASE 
let upperCase = str.toUpperCase();
console.log(upperCase);

//lower case

let lowerCase = str.toLowerCase();
console.log(lowerCase);

// concate

let firstName = "Aditya";
let lastName = "Kumar"
// let fullName = firstName.concat(lastName);
// console.log(fullName);
 // OR

 let fullName = firstName+lastName;
 console.log(fullName);


 // split -> return array
 let spllitedStr = str.split("*");
 console.log(spllitedStr);
 
// console.log(str.charAt(0));