import { ReactElement } from 'react'

interface ITableProps {
    data: any[]
    children: ReactElement[]
    noDataMessage?: string
    Skeleton?: ReactElement
    loading?: boolean
}

export default ITableProps
