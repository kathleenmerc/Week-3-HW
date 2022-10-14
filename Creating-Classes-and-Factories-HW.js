//Creating Classes and Factories Homework (Week 3)
/*
Hamster
attributes:
owner - string, initially set as an empty string
name - string, set the name from parameter in constructor method
price - integer, set as 15
methods:
wheelRun() - log "squeak squeak"
eatFood() - log "nibble nibble"
getPrice() - return the price
*/

class Hamster {
    constructor (owner, name, price = 15) {
        this.owner = owner,
        this.name = name,
        this.price = price
    }

    wheelRun() {
        console.log("squeak squeak")
    }

    eatFood() {
        console.log("nibble nibble")
    }

    getPrice() {
        return this.price
    }
}

console.log(Hamster)


/*
Person
attributes:

name - set name from parameter in constructor method
age - initially 0
height - initially 0
weight - initially 0
mood - integer starting at 0 initially
hamsters - empty array initially
bankAccount - initially set to 0
methods:

getName() - returns name
getAge() - returns age
getWeight() - returns weight
greet() - logs a message with person's name
eat() - increment weight, increment mood
exercise() - decrement weight
ageUp() - increment age, increment height, increment weight, decrement mood, increment bank account by 10 (birthday money)
buyHamster(hamster) - push the hamster object onto the hamster array, increment mood by 10, decrement bankAccount by the value of the hamster (hint: use getPrice())
*/

class Person {
    constructor (name, age, height, weight, mood, hamsters, bankAccount) {
        this.name = name,
        this.age = age || 0,
        this.height = height || 0,
        this.weight = weight || 0,
        this.mood = mood || 0,
        this.hamsters = hamsters || []
        this.bankAccount = bankAccount || 0
    }

    getName() {
        return this.name
    }

    getAge() {
        return this.age
    }

    getWeight() {
        return this.weight
    }

    greet() {
        console.log(`Hello ${this.name}!`)
    }

    eat() {
        this.weight++
        this.mood++
    }

    exercise() {
        this.weight--
    }

    ageUp() {
        this.age++
        this.height++
        this.weight++
        this.mood--
        this.bankAccount += 10
    }

    buyHamster() {
        this.hamsters.push(Hamster)
        this.mood++
        this.bankAccount = this.bankAccount - Hamster.price
    }
}

console.log(Person)