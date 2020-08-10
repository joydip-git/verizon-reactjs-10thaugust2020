export class Person {
  constructor(firstName, lastName, location) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.location = location;
  }

  print() {
    return this.firstName + " " + this.lastName + " " + this.location;
  }
}
//const arr = [];
// module.exports = {
//   Person: Person,
// };
