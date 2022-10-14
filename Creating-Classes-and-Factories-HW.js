//Creating Classes and Factories Homework (Week 3):


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
        this.hamsters = [],
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

    eat(num) {
        if (num) {
            this.weight = this.weight + num
            this.mood = this.mood + num
        } else {
            this.weight++
            this.mood++
        }
    }

    exercise(num) {
        if (num) {
            this.weight = this.weight - num
        } else {
            this.weight--
        }
    }

    ageUp(num) {
        if (num) {
            this.age = this.age + num
            this.height = this.height + num
            this.weight = this.weight + num
            this.mood = this.mood - num
            this.bankAccount = this.bankAccount + (num * 10)
        } else {
            this.age++
            this.height++
            this.weight++
            this.mood--
            this.bankAccount += 10
        }
    }

    buyHamster(hamsterPet) {
        this.hamsters.push(hamsterPet)
        this.mood += 10
        this.bankAccount = this.bankAccount - hamsterPet.getPrice()
    }
}
let hamsterPet = Hamster
console.log(Person)



/*
Create a Story with your Person class
Feel free to update or add methods to automate some of these tasks.

1. Instantiate a new Person named Timmy
2. Age Timmy five years
3. At this point Timmy's a little bummed. As a precocious child, he feels he's "seen it all" already. Have him eat five times.
4. Now Timmy's a little heavier than he wants to be. Kindergarten's coming up and he wants to look good. Have him exercise five times
5. Age Timmy 9 years
6. Create a hamster named "Gus"
7. Set Gus's owner to the string "Timmy"
8. Have Timmy "buy" Gus
9. Age Timmy 15 years
10. Have Timmy eat twice
11. Have Timmy exercise twice
*/

//1. and 2.
const timmy = new Person("Timmy", 5)
console.log(timmy)

//3.
timmy.eat(5)
console.log(timmy)

//4.
timmy.exercise(5)
console.log(timmy)

//5. 
timmy.ageUp(9)
console.log(timmy)

//6. and 7.
let gus = new Hamster("Timmy", "Gus")
console.log(gus)

//8.
timmy.buyHamster(gus)
console.log(timmy)

//9.
timmy.ageUp(15)
console.log(timmy)

//10.
timmy.eat(2)
console.log(timmy)

//11.
timmy.exercise(2)
console.log(timmy)