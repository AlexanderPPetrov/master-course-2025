import DefaultLayout from "../layouts/DefaultLayout"
import PageTitle from "@/components/PageTitle"

function HomePage() {

    return <DefaultLayout 
                subHeader={<PageTitle title="Начало"/>}
                leftContent={null} 
                rightContent={null}/>
}

export default HomePage