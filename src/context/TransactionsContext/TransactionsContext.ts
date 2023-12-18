import { createContext } from 'react'

import { ITransaction } from './interfaces/ITransaction'
import { ITransactionsContext } from './interfaces/ITransactionsContext'

export const TransactionsContext = createContext<ITransactionsContext>({
    transactions: [],
    loadingTransactions: false,
    balance: 0,
    gains: 0,
    expenses: 0,
    formattedBalance: '',
    formattedGains: '',
    formattedExpenses: '',
    async setTransaction(transaction: Omit<ITransaction, 'id'>) {},
})
