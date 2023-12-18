import { FunctionComponent } from 'react'

import ITableProps from './interfaces/ITableProps'
import { TableContainer, TableContainerWrapper } from './table.styles'
import { TableBody } from './TableBody'
import { TableHeader } from './TableHeader'

export const Table: FunctionComponent<ITableProps> = ({ data, children, noDataMessage, Skeleton, loading }) => (
    <TableContainer>
        <TableContainerWrapper>
            <TableHeader columns={children} />
            <TableBody Skeleton={Skeleton} columns={children} data={data} loading={loading} noDataMessage={noDataMessage} />
        </TableContainerWrapper>
    </TableContainer>
)
