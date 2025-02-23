import StudentsList from "./StudentsList"
import SearchInput from "../ui/SearchInput"
import type { Student } from "./types"
import { useState } from "react"


function StudentsContainer() {

    const [searchValue, setSearchValue] = useState<string>("")

    const [students, setStudents] = useState<Student[]>([
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
    ])

    const getMatchingStudents = () => {
        return students.filter(({name}) => {
            return name.toLocaleLowerCase()
                   .includes(searchValue.toLocaleLowerCase())
        })
    }

    return <div>
            <SearchInput 
                        value={searchValue} 
                        onChange={e => setSearchValue(e.target.value)}
                        onClearSearch={() => setSearchValue('')}
                        />
            <div id="students-container" 
                        className="card">
                <StudentsList students={getMatchingStudents()}/>
            </div>
    </div>
    
   
}

export default StudentsContainer