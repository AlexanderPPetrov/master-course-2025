import DefaultLayout from "../layouts/DefaultLayout"
import StudentsContainer from "../components/students/StudentsContainer"
import PageTitle from "@/components/PageTitle"

function StudentsPage() {
    return <DefaultLayout 
                subHeader={<PageTitle title="Студенти"/>}
                leftContent={<StudentsContainer/>} 
                rightContent={null}/>

}

export default StudentsPage