import { Student } from "./types"

type Props = {
    student: Student
}

function StudentsListItem({ student } : Props) {
    return <div>
        <span>име:</span> {student.name},
        <span>години:</span> {student.age}
    </div>
}

export default StudentsListItem