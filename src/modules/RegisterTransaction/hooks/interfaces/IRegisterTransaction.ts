import { ITransaction } from 'context/TransactionsContext'

export interface IRegisterTransaction extends Omit<ITransaction, 'id' | 'value' | 'date'> {
    value: string
}
