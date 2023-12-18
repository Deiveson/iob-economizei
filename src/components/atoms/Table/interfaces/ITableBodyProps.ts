import { ReactElement } from 'react'

interface ITableBodyProps {
    data: any[]
    columns: ReactElement[]
    Skeleton?: ReactElement
    loading?: boolean
    noDataMessage?: string
}

export default ITableBodyProps
