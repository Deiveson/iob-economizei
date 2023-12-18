import { CSSProperties, ReactElement } from 'react'

interface IColumnsProps {
    render(value: any): ReactElement

    description?: string
    dataAttribute: string | string[]
    value?: any
    style?: CSSProperties
    headerStyle?: CSSProperties
}

export default IColumnsProps
