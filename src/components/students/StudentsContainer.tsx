import StudentsList from "./StudentsList"
import SearchInput from "../ui/SearchInput"
import type { Student } from "./types"
import { useState } from "react"
import NoResults from "../NoResults"


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


    function getResults() {
        return hasResults() ? 
        <StudentsList students={getMatchingStudents()}/> :
        <NoResults searchValue={searchValue}></NoResults>
    }

    function hasResults() {
        return Boolean(getMatchingStudents().length)
    }

    return <div>
            <SearchInput 
                        value={searchValue} 
                        onChange={e => setSearchValue(e.target.value)}
                        onClearSearch={() => setSearchValue('')}
                        inputClass={hasResults() ? '' : 'border !border-red-500 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500'}
                        />
            <div id="students-container" 
                        className="mt-2">
                            {getResults()}
                
            </div>
    </div>
    
   
}

export default StudentsContainer