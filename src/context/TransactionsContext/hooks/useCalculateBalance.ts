import { useEffect, useState } from 'react'

import { useCurrency } from 'hooks/useCurrency'

import { ITransaction } from '../interfaces/ITransaction'
import { TransactionsItemType } from '../transactions.enums'

export const useCalculateBalance = (transactions: Array<ITransaction>) => {
    const [balance, setBalance] = useState<number>(0)
    const [gains, setGains] = useState<number>(0)
    const [expenses, setExpenses] = useState<number>(0)

    const formattedBalance = useCurrency({ value: balance })
    const formattedGains = useCurrency({ value: gains })
    const formattedExpenses = useCurrency({ value: expenses })

    useEffect(() => {
        setBalance(0)
        setGains(0)
        setExpenses(0)
        transactions.forEach(transaction => {
            if (transaction.type === TransactionsItemType.GAIN) {
                setBalance(prevState => prevState + transaction.value)
                setGains(prevState => prevState + transaction.value)
            } else {
                setBalance(prevState => prevState - transaction.value)
                setExpenses(prevState => prevState - transaction.value)
            }
        })
    }, [transactions])

    return { balance, gains, expenses, formattedBalance, formattedGains, formattedExpenses }
}
