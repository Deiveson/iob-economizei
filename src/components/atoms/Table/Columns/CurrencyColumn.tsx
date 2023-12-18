import { FunctionComponent } from 'react'

import { TransactionsItemType } from 'context/TransactionsContext'
import { useCurrency } from 'hooks/useCurrency'

import { Columns } from './Columns'

import { ISharedColumnProps } from '../interfaces/ISharedColumnProps'
import { CurrencyItem } from '../table.styles'

export const CurrencyColumn: FunctionComponent<ISharedColumnProps<{ value: number; type: TransactionsItemType }>> = ({
    value: { value, type },
}) => {
    const formattedCurrency = useCurrency({ value })

    return <Columns dataAttribute="value" render={() => <CurrencyItem type={type}>{formattedCurrency}</CurrencyItem>} />
}
