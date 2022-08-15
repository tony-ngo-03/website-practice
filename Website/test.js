// variables

// generally, use const
const temp = 1;

// if can change, use let
let x = 1;

// var is also used
var tempx = 1;


// functions
let newFunction = myFunction(4, 3);

function myFunction(a, b){
    return a * b;
}

// javascript objects
const car = {type:"Fiat", model:"500", color: "white", fullName : function() {
    return this.type + " " + this.model;
}};

