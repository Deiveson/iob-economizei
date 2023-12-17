import { FunctionComponent, PropsWithChildren } from 'react'

import { useCalculateBalance } from './hooks/useCalculateBalance'
import { useExtract } from './hooks/useExtract'

import { ExtractContext } from '.'

export const ExtractProvider: FunctionComponent<PropsWithChildren> = ({ children }) => {
    const { extract, loadingExtract, setTransaction } = useExtract()
    const { balance, formattedBalance, formattedExpenses, expenses, gains, formattedGains } = useCalculateBalance(extract)

    return (
        <ExtractContext.Provider
            value={{
                extract,
                loadingExtract,
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
        </ExtractContext.Provider>
    )
}

//Eu Deixei o saldo e o extrato no mesmo contexto, mas no mundo real seria dividido
