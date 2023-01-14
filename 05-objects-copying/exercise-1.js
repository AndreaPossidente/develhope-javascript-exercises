const person1 = {
  firstName: "John",
  lastName: "Doe",
  age: 25,
};

const person2 = person1;

// Modify the property `firstName` of the `person2` in "Simon".

person2.firstName = "Simon";

/** By modifying the object `person2`, also the object `person1` gets modified because it
 *  is just a reference to the object `person1`.
 *
 *  You should do a copy of the object instead, using `Object.assign({}, person1)`
 *  or the spred operator `...person1`.
 */

console.log(person1);
console.log(person2);
