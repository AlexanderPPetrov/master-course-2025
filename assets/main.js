import math, { sum, PI } from "./math.js";

sum(3, 4)
console.log(PI)

math(3, 5)

const a = 1;
let b = 2;

const person = {
    firstName: "A",
    lastName: "B"
}

const personFirstName = person.firstName
const property = "firstName"
const fn = person[property]

const tralala2 = { b: 2}
// const b2 = {...tralala, ...tralala2}

const array1 = [1,2,3]
const array2 = [4,5,6]
const newArray = [...array1, ...array2]

const tralala = { a: 1}
const { a: tralalaA } = tralala
console.log(tralalaA)
const { firstName } = person
console.log(firstName)

const [_, secondValue ] = array1
console.log(secondValue)



function doSomething() {
    return 'doing something'
}

const doSomethingElse = ({ firstName }) => {
    console.log(firstName)
    return 'doing something else'
}

doSomethingElse(person)

const doSomethingElse2 = () => {
    return {
        a: 1,
        b: 2,
    }
}

const { a: resultA, b: resultB } = doSomethingElse2()
console.log(resultA, resultB)

const doSomethingElse3 = () => {
    return [1,2]
}

const [first, second] = doSomethingElse3()

console.log(first, second)



