import { TransactionsItemType } from '../transactions.enums'

export interface ITransaction {
    id: number
    date: string
    description: string
    value: number
    type: TransactionsItemType
}
