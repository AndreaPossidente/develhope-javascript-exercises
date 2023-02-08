const number = 15;

const prom = new Promise((resolve, reject) => {
  number > 10
    ? resolve(`${number} is greater than 10`)
    : reject(`${number} is less than 10`);
});

prom.then((res) => console.log(res)).catch((err) => console.error(err));
