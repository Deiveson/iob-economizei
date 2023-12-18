import { CSSProperties } from 'react'

export interface ISharedColumnProps<V> {
    value?: V
    dataAttribute: string | string[]
    description?: string
    headerStyle?: CSSProperties
}
