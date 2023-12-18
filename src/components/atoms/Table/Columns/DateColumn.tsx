import { FunctionComponent, useMemo } from 'react'

import { Columns } from './Columns'

import { ISharedColumnProps } from '../interfaces/ISharedColumnProps'

export const DateColumn: FunctionComponent<ISharedColumnProps<{ date: string }>> = ({ value: { date } }) => {
    const formattedDate = useMemo(() => {
        return new Date(date.replace(/-/g, '/')).toLocaleDateString('pt-BR')
    }, [date])

    return <Columns dataAttribute="date" render={() => <div>{formattedDate}</div>} />
}
