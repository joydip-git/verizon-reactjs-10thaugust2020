function person(firstName, lastName, location) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.location = location;
}
//purring a print prototype
person.prototype.print = function () {
  console.log("print of prototype");
  return this.firstName + " " + this.lastName + " " + this.location;
};

function trainee(firstName, lastName, location, subject) {
  person.call(this, firstName, lastName, location);
  this.subject = subject;
  this.print = function () {
    console.log("print of trainee");
    // var partialInfo = person.prototype.print.apply(this);
    var partialInfo = this.__proto__.print.apply(this);
    return partialInfo + " " + this.subject + "" + this.project;
  };
}
function trainer(firstName, lastName, location, subject) {
  person.call(this, firstName, lastName, location);
  this.subjectTeaches = subject;
  this.print = function () {
    console.log("print of trainer");
    // var partialInfo = person.prototype.print.apply(this);
    var partialInfo = this.__proto__.print.apply(this);
    return partialInfo + " " + this.subjectTeaches;
  };
}

trainee.prototype = Object.setPrototypeOf(trainee.prototype, person.prototype);
trainer.prototype = Object.setPrototypeOf(trainer.prototype, person.prototype);

var anilTrainee = new trainee("anil", "gupta", "bangalore", "ReactJS");
anilTrainee.project = "SITA";
var result = anilTrainee.print();
console.log(result);
// console.log(anilTrainee.__proto__ === trainee.prototype);
//
// for (const key in anilPerson) {
//   console.log(key + ":" + anilPerson[key]);
// }
