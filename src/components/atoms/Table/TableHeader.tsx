import { FunctionComponent, useId } from 'react'

import ITableHeaderProps from './interfaces/ITableHeaderProps'
import { HeaderItem, TableHeaderContainer, TableHeaderRow } from './table.styles'

export const TableHeader: FunctionComponent<ITableHeaderProps> = ({ columns }) => {
    const id = useId()

    return (
        <TableHeaderContainer>
            <TableHeaderRow>
                {columns.map(column => (
                    <HeaderItem key={id} style={column.props.headerStyle || {}}>
                        <h4>{column.props.description}</h4>
                    </HeaderItem>
                ))}
            </TableHeaderRow>
        </TableHeaderContainer>
    )
}
