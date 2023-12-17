import { useEffect, useState } from 'react'

import { getExtract } from '../APIs/getExtract'
import { postTransaction } from '../APIs/postTransaction'
import { ITransaction } from '../interfaces/ITransaction'

/*  Acredito que ficaria mais bonito e mais entendível em uma classe,
    utilizando um Singleton onde a única instância poderia ser um state,
    adotei este, que é o padrão mais comum.
*/
export const useExtract = () => {
    const [loadingExtract, setLoadingExtract] = useState<boolean>(false)
    const [extract, setExtract] = useState<Array<ITransaction>>([])

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
    const setTransaction = async (transaction: Omit<ITransaction, 'id'>) => {
        try {
            setLoadingExtract(true)
            const registeredTransaction = await postTransaction(transaction)
            setExtract(prevExtract => prevExtract.concat(registeredTransaction))
        } catch ({ response }) {
            console.error(response)
        } finally {
            setLoadingExtract(false)
        }
    }

    useEffect(() => {
        getExtractData()
    }, [])

    return { loadingExtract, extract, setTransaction }
}
