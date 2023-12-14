import { createContext } from 'react'

import { IExtractContext } from './interfaces/IExtractContext'

export const ExtractContext = createContext<IExtractContext>({
    extract: [],
    loadingExtract: false,
    balance: 0,
    gains: 0,
    spents: 0,
    formattedBalance: '',
    formattedGains: '',
    formattedSpents: '',
})
