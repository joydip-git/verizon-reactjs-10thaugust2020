// var add = function (a, b) {
//   return a + b;
// };

// var result = add(10, 20);
// console.log(result);
// console.log(add);

// //object literal syntax
// var joydip = {
//   id: 0,
//   name: "joydip",
//   subject: "React JS",
// };
// console.log(joydip);

// //Object
// function ObjectType() {}

// //function constructor syntax
// function person(name, subject) {
//   //value properties
//   this.personName = name;
//   this.subject = subject;
//   this.address = {
//     city: "bangalore",
//   };

//   //functional property
//   this.print = function () {
//     return this.personName + " " + this.subject;
//   };
// }

// var anilObject = new person("anil", "react js");
// console.log(anilObject);
// //console.log(anilObject.__proto__);

// //Object.create()

// //ES 6 class --> syntactical sugarcoating of
// //a. function constructor
// //b. function prototype
// class A {}
// const obj = new A();

//variable hoisting
console.log(x);
var x = 10;
var y = 20;
var f = function () {};
console.log(x);
f();

/**
 *var globObject={
     x: 10,
     y: 20,
     f: <ref-to-function>
     person:
 }
 */
let x = 10;
for (var index = 0; index < 2; index++) {
  let x = 20;
  console.log(x);
}
console.log(x);
const y = [12, 13];
y.push(20);
console.log(y);
/**
 * x= 20
 */
