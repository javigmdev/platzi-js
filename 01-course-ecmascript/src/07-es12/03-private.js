// Class fields are public by default, but private class members can be created by using a hash # prefix.
// The privacy encapsulation of these class features is enforced by javascript itself
class User {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  #speak() {
    return 'Hello';
  }
  greeting() {
    return `${this.speak()} ${this.name}`;
  }

  get #uAge() {
    return this.age;
  }

  set #uAge(age) {
    this.age = age;
  }
}

const bebeloper1 = new User('David', 15);
console.log(bebeloper1.uAge);
console.log((bebeloper1.uAge = 20));
