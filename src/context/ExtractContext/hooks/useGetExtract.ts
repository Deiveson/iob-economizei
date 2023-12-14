import { useEffect, useState } from 'react'

import { getExtract } from '../APIs/getExtract'
import { IExtractItem } from '../interfaces/IExtractItem'

export const useGetExtract = () => {
    const [loadingExtract, setLoadingExtract] = useState<boolean>(false)
    const [extract, setExtract] = useState<Array<IExtractItem>>([])

    const getExtractData = async () => {
        try {
            setLoadingExtract(true)
            const extractData = await getExtract()
            setExtract(extractData)
        } catch ({ response }) {
            console.error(response)
        } finally {
            setLoadingExtract(false)
        }
    }

    useEffect(() => {
        getExtractData()
    }, [])

    return { loadingExtract, extract }
}
