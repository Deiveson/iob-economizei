import { FunctionComponent, ReactNode } from 'react'

import { useCalculateBalance } from './hooks/useCalculateBalance'
import { useGetExtract } from './hooks/useGetExtract'

import { ExtractContext } from '.'

export const ExtractProvider: FunctionComponent<{ children: ReactNode }> = ({ children }) => {
    const { extract, loadingExtract } = useGetExtract()
    const { balance, formattedBalance, formattedSpents, spents, gains, formattedGains } = useCalculateBalance(extract)

    return (
        <ExtractContext.Provider
            value={{ extract, loadingExtract, balance, formattedBalance, formattedSpents, spents, gains, formattedGains }}
        >
            {children}
        </ExtractContext.Provider>
    )
}

//Eu Deixei o saldo e o extrato no mesmo contexto, mas no mundo real seria dividido
