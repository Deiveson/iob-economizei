import { FunctionComponent, useId, useMemo } from 'react'

import { getColumnValue } from './getColumnValue'
import ITableBodyProps from './interfaces/ITableBodyProps'
import { TableBodyContainer, TableRow } from './table.styles'

export const TableBody: FunctionComponent<ITableBodyProps> = ({ data, columns, noDataMessage, Skeleton, loading }) => {
    const hasData = useMemo(() => !(data && data.length === 0), [data])
    const id = useId()

    return (
        <TableBodyContainer>
            {loading && Skeleton}
            {!loading &&
                hasData &&
                data.map(item => (
                    <TableRow key={id}>
                        {columns.map(column => ({
                            ...column,
                            props: {
                                ...column.props,
                                value: getColumnValue(item, column.props.dataAttribute),
                            },
                        }))}
                    </TableRow>
                ))}
            {!loading && !hasData && (
                <TableRow justifyContent="center">
                    <p>{noDataMessage}</p>
                </TableRow>
            )}
        </TableBodyContainer>
    )
}
