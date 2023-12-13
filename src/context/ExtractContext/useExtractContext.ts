import { useContext } from 'react'

import { ExtractContext, IExtractContext } from '.'

export const useExtractContext = (): IExtractContext => {
    const context = useContext(ExtractContext)

    if (!context) throw new Error('useAuthContext must be used within a AuthProvider')

    return context
}
