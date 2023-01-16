class Person {
  _firstName = "";
  _lastName = "";
  _age = 1;
  constructor(firstName, lastName, age) {
    this._firstName = firstName;
    this._lastName = lastName;
    this._age = age;
  }

  //first name getter and setter
  get firstName() {
    return this._firstName;
  }
  set firstName(newFirstName) {
    this._firstName = newFirstName;
  }

  //last name getter and setter
  get lastName() {
    return this._lastName;
  }
  set lastName(newLastName) {
    this._lastName = newLastName;
  }

  //age getter and setter
  get age() {
    return this._age;
  }
  set age(newAge) {
    this._age = newAge;
  }

  //full name getter
  get fullName() {
    return `${this._firstName} ${this._lastName}`;
  }
}

const person = new Person("Mario", "Rossi", 25);
console.log(person.fullName);

person.firstName = "Maria";
person.lastName = "Verdi";
console.log(person.fullName);
