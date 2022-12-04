// empty object 

let obj = {}
console.log(obj);

// Objects

let objAdi = {
    "Name": "Aditya",
    "Age": 21,
    "Place": "Noida"
}
console.log(objAdi);

let capAmerica = {
    Name : "Steve",
    Age : 999,
    Friends : ['Natasa','Thor', 'Hulk', 'Tony','Bruce'],
    Address : {
        city : "Queens",
        state : "Texas",
    },
    isAvenger : false,
    sayHi:function() {
        console.log("Cap America says Hiii to everyone");
    }
}
//Whole object
console.log(capAmerica);
//Friends of capAmerica
console.log(capAmerica.Friends);
console.log(capAmerica.Friends[1]);
//city of capAmerica
// console.log(capAmerica.Address.city);

// call function inside the object.
capAmerica.sayHi();

// console.log("object before update",capAmerica);

// add a new key to object 
capAmerica.Movies = ['Avenger', 'Civil War', 'Endgame'];
// console.log("object after update",capAmerica);

// delete a key
delete capAmerica.Movies;
// console.log(capAmerica);
capAmerica.isAvenger = true;

capAmerica.Address.city = "Bihar";

// console.log(capAmerica);

// Second method to access the keys.

console.log(capAmerica.Name);
console.log(capAmerica['Name']);