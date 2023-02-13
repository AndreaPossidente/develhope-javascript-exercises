const user = {
  id: 1,
  name: "John",
  age: 25,
};

function saveUserInStorage(obj) {
  localStorage.setItem("user", JSON.stringify(obj));
}

saveUserInStorage(user);
