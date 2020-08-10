//const PersonModule = require("./person");
//PersonModule->{PersonType:Person, Array:arr} module.exports
// const { Person } = require("./person");
import { Person } from "./person";

export class Trainer extends Person {
  constructor(firstName, lastName, location, subjectToTeach) {
    //person.call(this, firstname, lastname, location)
    super(firstName, lastName, location);
    this.subjectToTeach = subjectToTeach;
  }
  print() {
    let partialInfo = super.print();
    return partialInfo + " " + this.subjectToTeach;
  }
}
//module.exports = { Trainer };
