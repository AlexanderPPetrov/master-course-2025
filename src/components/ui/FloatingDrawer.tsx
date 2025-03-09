import { ReactNode } from "react"

type Props = {
    children: ReactNode
}

function FloatingDrawer({ children } : Props) {
    return <div className="fixed w-80 bg-white p-3 rounded-t-lg right-5 bottom-0 shadow-md">
        {children}
    </div>
}

export default FloatingDrawer