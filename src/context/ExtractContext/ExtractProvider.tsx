import {FunctionComponent, ReactNode, useState} from 'react'

import { ExtractContext } from '.'

import {IExtractItem} from './interfaces/IExtractContext'

export const ExtractProvider: FunctionComponent<{children: ReactNode}> = ({ children }) => {

    const [extract, setExtract] = useState<Array<IExtractItem>>([])

    return (
        <ExtractContext.Provider value={{extract}}>
            {children}
        </ExtractContext.Provider>
    )
}
