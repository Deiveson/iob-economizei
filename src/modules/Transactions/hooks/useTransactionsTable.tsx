import { useTransactionsContext } from 'context/TransactionsContext'

export const useTransactionsTable = () => {
    const { transactions } = useTransactionsContext()
}
