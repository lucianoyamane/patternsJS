function Person(name, age, hasCar) {
    this.name = name;
    this.age = age;
    this.hasCar = hasCar || false;
}

Person.prototype.exampleFunction = function() {
    return this.hasCar? "He has a car" : "He does not have a car";
}

module.exports.Person = Person;