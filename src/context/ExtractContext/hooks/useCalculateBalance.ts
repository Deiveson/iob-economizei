import { useEffect, useState } from 'react'

import { useCurrency } from 'hooks/useCurrency'

import { ExtractItemType } from '../extract.enums'
import { ITransaction } from '../interfaces/ITransaction'

export const useCalculateBalance = (extract: Array<ITransaction>) => {
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
        extract.forEach(extractItem => {
            if (extractItem.type === ExtractItemType.GAIN) {
                setBalance(prevState => prevState + extractItem.value)
                setGains(prevState => prevState + extractItem.value)
            } else {
                setBalance(prevState => prevState - extractItem.value)
                setExpenses(prevState => prevState - extractItem.value)
            }
        })
    }, [extract])

    return { balance, gains, expenses, formattedBalance, formattedGains, formattedExpenses }
}
