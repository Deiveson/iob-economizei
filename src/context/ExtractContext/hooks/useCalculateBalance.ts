import { useEffect, useState } from 'react'

import { useCurrency } from 'hooks/useCurrency'

import { ExtractItemType } from '../extract.enums'
import { IExtractItem } from '../interfaces/IExtractItem'

export const useCalculateBalance = (extract: Array<IExtractItem>) => {
    const [balance, setBalance] = useState<number>(0)
    const [gains, setGains] = useState<number>(0)
    const [spents, setSpents] = useState<number>(0)

    const formattedBalance = useCurrency({ value: balance })
    const formattedGains = useCurrency({ value: gains })
    const formattedSpents = useCurrency({ value: spents })

    useEffect(() => {
        extract.forEach(extractItem => {
            if (extractItem.type === ExtractItemType.GAIN) {
                setBalance(prevState => prevState + extractItem.value)
                setGains(prevState => prevState + extractItem.value)
            } else {
                setBalance(prevState => prevState - extractItem.value)
                setSpents(prevState => prevState - extractItem.value)
            }
        })
    }, [extract])

    return { balance, gains, spents, formattedBalance, formattedGains, formattedSpents }
}
