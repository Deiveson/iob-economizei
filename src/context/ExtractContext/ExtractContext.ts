import { createContext } from 'react'

import { IExtractContext } from './interfaces/IExtractContext'
import { ITransaction } from './interfaces/ITransaction'

export const ExtractContext = createContext<IExtractContext>({
    extract: [],
    loadingExtract: false,
    balance: 0,
    gains: 0,
    expenses: 0,
    formattedBalance: '',
    formattedGains: '',
    formattedExpenses: '',
    async setTransaction(transaction: Omit<ITransaction, 'id'>) {},
})
