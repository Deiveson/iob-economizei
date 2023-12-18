import { useEffect, useState } from 'react'

import { getTransactions } from '../APIs/getTransactions'
import { postTransaction } from '../APIs/postTransaction'
import { ITransaction } from '../interfaces/ITransaction'

/*  Acredito que ficaria mais entendível em uma classe,
    utilizando um Singleton onde a única instância poderia ser um state dentro do context,
    adotei este padrão, que é o mais comum.
*/
export const useTransactions = () => {
    const [loadingTransactions, setLoadingTransactions] = useState<boolean>(false)
    const [transactions, setTransactions] = useState<Array<ITransaction>>([])

    const getTransactionsData = async () => {
        try {
            setLoadingTransactions(true)
            const transactionsData = await getTransactions()
            transactionsData.sort(function (a, b) {
                return new Date(b.date).getTime() - new Date(a.date).getTime()
            })
            setTransactions(transactionsData)
        } catch ({ response }) {
            console.error(response)
        } finally {
            setLoadingTransactions(false)
        }
    }
    const setTransaction = async (transaction: Omit<ITransaction, 'id'>) => {
        try {
            setLoadingTransactions(true)
            const registeredTransaction = await postTransaction(transaction)
            setTransactions(prevTransactions => prevTransactions.concat(registeredTransaction).sort(function (a, b) {
                return new Date(b.date).getTime() - new Date(a.date).getTime()
            }))
        } catch ({ response }) {
            console.error(response)
        } finally {
            setLoadingTransactions(false)
        }
    }

    useEffect(() => {
        getTransactionsData()
    }, [])

    return { loadingTransactions, transactions, setTransaction }
}
