
type Props = {
    title: string
}

function PageTitle({ title }: Props) {
    return <h1 
    className="border-l-4 pl-4 border-teal-500 text-xl font-bold">
        { title }
    </h1>
}

export default PageTitle