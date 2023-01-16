class Square {
  constructor(side) {
    this.side = side;
  }
}

class Rectangle {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }
}

class Circle {
  constructor(radius) {
    this.radius = radius;
  }
}

class AreaCalculator {
  static calculate(obj) {
    if (obj instanceof Square) {
      return obj.side * obj.side;
    } else if (obj instanceof Rectangle) {
      return obj.width * obj.height;
    } else if (obj instanceof Circle) {
      return Number((Math.PI * obj.radius ** 2).toFixed(2));
      //ho convertito il risultato in number perché toFixed da come output una stringa
    }
  }
}

const square = new Square(4);
const rectangle = new Rectangle(4, 2);
const circle = new Circle(5);

console.log(AreaCalculator.calculate(square));
console.log(AreaCalculator.calculate(rectangle));
console.log(AreaCalculator.calculate(circle));
