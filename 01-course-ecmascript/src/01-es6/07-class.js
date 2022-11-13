//declaration
class EmptyUser {}

//instance
const emptyUser = new EmptyUser();

class UserMethod {
  greeting() {
    return 'Hello';
  }
}

const userMethod = new UserMethod();
console.log(userMethod.greeting());

class UserConstructor {
  constructor() {
    console.log('New user');
  }
  greeting() {
    return 'Hello';
  }
}

const userConstructor = new UserConstructor();

class UserThis {
  constructor(name) {
    this.name = name;
  }
  speak() {
    return 'Hello';
  }
  greeting() {
    return `${this.speak()} ${this.name}`;
  }
}

const userThis = new UserThis('Tom');
console.log(userThis.greeting());

class UserGetSet {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  speak() {
    return 'Hello';
  }
  greeting() {
    return `${this.speak()} ${this.name}`;
  }

  get uAge() {
    return this.age;
  }

  set uAge(age) {
    this.age = age;
  }
}

const userGetSet = new UserGetSet('David', 15);
console.log(userGetSet.uAge);
console.log((userGetSet.uAge = 20));
