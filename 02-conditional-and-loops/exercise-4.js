function nicknameMap(persons) {
  let nicknames = [];

  for (let i = 0; i < persons.length; i++) {
    nicknames.push(persons[i].name + "-" + persons[i].age);
  }

  return nicknames;

  // Siccome ci sono vari cicli for, per sicurezza metto anche gli altri qui sotto:

  // Esempio usando forEach
  // persons.forEach((person) => {
  //   nicknames.push(person.name + "-" + person.age);
  // });
  // return nicknames;

  // Esempio usando for of
  // for (let person of persons) {
  //   nicknames.push(person.name + "-" + person.age);
  // }
  // return nicknames;

  // Esempio usando for in
  // for (let key in persons) {
  //   nicknames.push(persons[key].name + "-" + persons[key].age);
  // }
  // return nicknames;

  // Esempio usando map.
  // return persons.map((person) => person.name + "-" + person.age);
}

const persons = [
  { name: "Paul", age: 16 },
  { name: "George", age: 17 },
  { name: "Lucas", age: 21 },
  { name: "Marco", age: 32 },
  { name: "Peter", age: 18 },
  { name: "Carl", age: 13 },
  { name: "Simon", age: 24 },
  { name: "Mark", age: 15 },
  { name: "Sandra", age: 34 },
  { name: "Alice", age: 28 },
];

const nicknames = nicknameMap(persons);
console.log(persons);
console.log(nicknames);
