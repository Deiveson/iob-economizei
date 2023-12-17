import { ITransaction } from './ITransaction'

export interface IExtractContext {
    extract: Array<ITransaction>
    loadingExtract: boolean
    balance: number
    gains: number
    expenses: number
    formattedBalance: string
    formattedGains: string
    formattedExpenses: string
    setTransaction(transaction: Omit<ITransaction, 'id'>): Promise<void>
}
