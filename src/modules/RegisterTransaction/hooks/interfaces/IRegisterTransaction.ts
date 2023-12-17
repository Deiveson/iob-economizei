import { ITransaction } from 'context/ExtractContext'

export interface IRegisterTransaction extends Omit<ITransaction, 'id' | 'value' | 'date'> {
    value: string
}
