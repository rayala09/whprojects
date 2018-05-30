import { Component, OnInit } from '@angular/core';

class Greeting {
  message: string;
  constructor(message: string) {
    this.message = message;
  }

  greet() {
    return 'Hello,' + this.message;
  }
}

class Animal {
  private name: string;

  constructor(animalName: string) {
    this.name = animalName;
  }
  move(distance: number = 0) {
    console.log(`${this.name} moved ${distance}m.`);
  }
}

class Dog extends Animal {
  constructor(name: string) {
    super(name);
  }
  move(distanceMovedByDog: number = 5){
    console.log('dog is moving...');
    super.move(distanceMovedByDog);
  }

  bark() {
    console.log('Woof!');
  }

}

class Poodle extends Dog {
  constructor(name: string) {
    super(name);
  }
  move() {
    let moving = super.move();
    console.log('poodle is walking');

  }
}

class Horse extends Animal {
  constructor(name: string){
    super(name);
  }
  move(distanceMovedByHorse: number = 45){
    console.log('Horse is Moving....');
    super.move(distanceMovedByHorse);
  }
}

class User {
  private name: string;

  constructor(name: string) {
    this.name = name;
  }
}

class John extends User {
  constructor() {
    super('John');
  }
}

class Employee {
  private name: string;

  constructor(name: string) {
    this.name = name;
  }
}

class Person {
  protected name: string;

  protected constructor(name: string) {
    this.name = name;
  }
}

class Worker extends Person {
  private department: string;

  constructor(name: string, department: string) {
    super(name);
    this.department = department;
  }

  getDetails() {
    return `My name is ${this.name} and I work in ${this.department}`;
  }
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';

  ngOnInit() {
    // this.classTesting();
    // this.animalClassTesting();
    // this.classCompatibilityTesting();
    // this.extendDerivedClassTesting();
    this.protectedTesting();
  }

  classTesting() {
    const greeter = new Greeting('world!');
    console.log(greeter.greet());
  }

  animalClassTesting() {
    const dog = new Dog('Goofy');
      dog.bark();
      dog.move();

    const horse: Animal = new Horse('Seabiscuit');
    horse.move();

    const animal = new Animal('Cat');
    console.log(animal);

  }

  classCompatibilityTesting() {
    let user = new User('Doe');
    const john = new John();

    console.log(user);
    console.log(john);

    const employee = new Employee('Smith');
    console.log(employee);

    user = john;
    console.log(user);
  }

  extendDerivedClassTesting() {
    const poodle = new Poodle('Tom');
    poodle.move();


  }

  protectedTesting() {
    const worker = new Worker('Steve', 'Sales');
    console.log(worker.getDetails());

    const person = new Person('Patrick');
    console.log(person);
  }

}

