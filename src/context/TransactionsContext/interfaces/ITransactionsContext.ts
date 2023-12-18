import { ITransaction } from './ITransaction'

export interface ITransactionsContext {
    transactions: Array<ITransaction>
    loadingTransactions: boolean
    balance: number
    gains: number
    expenses: number
    formattedBalance: string
    formattedGains: string
    formattedExpenses: string
    setTransaction(transaction: Omit<ITransaction, 'id'>): Promise<void>
    updateTransaction(transaction: Omit<ITransaction, 'id'>, id: number): Promise<void>
}
