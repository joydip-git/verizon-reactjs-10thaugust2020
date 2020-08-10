//const { Person } = require("./person");
import { Person } from "./person";

export class Trainee extends Person {
  constructor(firstName, lastName, location, subject) {
    //person.call(this, firstname, lastname, location)
    super(firstName, lastName, location);
    this.subject = subject;
  }
  print() {
    let partialInfo = super.print();
    return partialInfo + " " + this.subject;
  }
}

//module.exports = { Trainee };
