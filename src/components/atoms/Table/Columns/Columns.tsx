import { FunctionComponent, useId } from 'react'

import IColumnsProps from '../interfaces/IColumnsProps'
import { TableItem } from '../table.styles'

export const Columns: FunctionComponent<IColumnsProps> = ({ render, value, style }) => {
    const id = useId()
    return (
        <TableItem key={id} style={style}>
            {render(value)}
        </TableItem>
    )
}
