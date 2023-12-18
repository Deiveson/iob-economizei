import { useContext } from 'react'

import { TransactionsContext, ITransactionsContext } from '.'

export const useTransactionsContext = (): ITransactionsContext => {
    const context = useContext(TransactionsContext)

    if (!context) throw new Error('useAuthContext must be used within a AuthProvider')

    return context
}
