import { Student } from "./types"

type Props = {
    student: Student
}

function StudentsListItem({ student } : Props) {
    return <li className="list-group-item">
        <span>име:</span> {student.name},
        <span>години:</span> {student.age}
    </li>
}

export default StudentsListItem