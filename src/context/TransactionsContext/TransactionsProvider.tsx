import { FunctionComponent, PropsWithChildren } from 'react'

import { useCalculateBalance } from './hooks/useCalculateBalance'
import { useTransactions } from './hooks/useTransactions'

import { TransactionsContext } from '.'

export const TransactionsProvider: FunctionComponent<PropsWithChildren> = ({ children }) => {
    const { transactions, loadingTransactions, setTransaction } = useTransactions()
    const { balance, formattedBalance, formattedExpenses, expenses, gains, formattedGains } = useCalculateBalance(transactions)

    return (
        <TransactionsContext.Provider
            value={{
                transactions,
                loadingTransactions,
                balance,
                formattedBalance,
                formattedExpenses,
                expenses,
                gains,
                formattedGains,
                setTransaction,
            }}
        >
            {children}
        </TransactionsContext.Provider>
    )
}

//Eu Deixei o saldo e o extrato no mesmo contexto, mas no mundo real seria dividido
