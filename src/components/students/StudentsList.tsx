import StudentsListItem from "./StudentsListItem"
import type { Student  } from "./types"

type Props = {
    students: Student[]
}
function StudentsList({ students } : Props) {

    const studentsComponents = students.map((student, index) => {
        return <StudentsListItem 
                    key={index} 
                    student={student}
                />
    })

    return <ul className="students-list list-group">
        {studentsComponents}
    </ul>
}

export default StudentsList