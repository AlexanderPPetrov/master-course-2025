export function sum(a, b) {
    return a + b
}

export const PI = 3.14


[1,2,3,4].filter((el) => el > 2)   //[3,4]

// 
// {
//     name: "Ivan",
//     age: 20,
// }

const people = [
    {name: "Ivan", age: 20},
    {name: "Peter", age: 30}, 
    {name: "Gergana", age: 25},
]

people.filter(({ age }) => age > 24)

people.map(() => '*') // ['*', '*', '*']

people.map(({ name }) => name) // ["Ivan", "Peter", "Gergana"]

people.reduce((acc, { age }) => acc + age, 0)


const student = {
    "name" : "Ivan",
    "age": 25,
    "address": "Bulgaria str"
}

Object.keys(student) //["name", "age", "address"]
Object.values(student) // ["Ivan", 25, "Bulgaria str"]
Object.entries(student) // [["name", "Ivan"], ["age", 25], ["address", "Bulgaria str"]]

export async function testAsync() {
    return 'a'
}

try {
    const result = await testAsync()
    console.log(result)
} catch (e) {
    console.log(e)
}



const multiply = (a, b) => {
    return a * b
}

export default multiply