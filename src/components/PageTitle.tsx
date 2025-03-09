import { useAppContext } from "@/providers/ApplicationProvider"

type Props = {
    title: string
}

function PageTitle({ title }: Props) {
    const { getTextColor } = useAppContext()
    return <h1 
    className={`${getTextColor()} border-l-4 pl-4 border-teal-500 text-xl font-bold`}>
        { title }
    </h1>
}

export default PageTitle