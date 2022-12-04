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
console.log(capAmerica.Address.city);

// call function inside the object.
capAmerica.sayHi();