const isLogged = true;

function firstPromise(isLogged) {
  return new Promise((resolve, reject) => {
    if (!isLogged) {
      reject(new Error("User's not logged in"));
    }
    resolve(Math.random());
  });
}

function secondPromise(num) {
  return new Promise((resolve, reject) => {
    if (num <= 0.5) {
      reject(new Error("num is less than 0.5"));
    }
    resolve(`{name: "John", age: 24}`);
  });
}

firstPromise(isLogged)
  .then((num) => secondPromise(num))
  .then((res) => console.log(res))
  .catch((err) => console.error(err));
