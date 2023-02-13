const user = {
  id: 1,
  name: "John",
  age: 25,
};

function saveUserInStorage(obj) {
  localStorage.setItem("user", JSON.stringify(obj));
}

function getUserFromStorage() {
  const usr = JSON.parse(localStorage.getItem("user"));
  console.log(usr);
}

saveUserInStorage(user);
getUserFromStorage();

// ho fatto una funzione e un metodo perché se ho capito bene è quello
// che chiedeva nel readme, ovviamente si poteva fare anche senza.
