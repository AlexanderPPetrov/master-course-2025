const a:number = 1
const b:boolean = true
const c:string = "Hello"

type Person = {
    firstName: string
    age?: number
}

// interface Person {
//     firstName: string
//     age?: number
// }


const person: Person = {
    firstName: "Ivan",
    age: 20
}

const person2: Person = {
    firstName: "Gabriela"
}

// person.age = "Asd" Typescript will show an error

type Props = {
    id: string
    title: string
    customProp?: string
}
 
function Hello({ id, title, customProp = "Trala"} : Props) {

    console.log(customProp)
    return (
     <div id={id}>
        { title }
    </div>
    )
  }
  
export default Hello
  