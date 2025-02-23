import StudentsList from "./StudentsList"
import type { Student } from "./types"

const students: Student[] = [
    {
        name: "Иван",
        age: 22,
    },
    {
        name: "Петър",
        age: 23,
    },
    {
        name: "Гергана",
        age: 24,
    }
]

function StudentsContainer() {
    return <div id="students-container" 
                className="card">
        <StudentsList students={students}/>
    </div>
}

export default StudentsContainer