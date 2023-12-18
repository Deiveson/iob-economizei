import { useEffect, useState } from 'react'

import {deleteTransaction} from "../APIs/deleteTransaction";
import { getTransactions } from '../APIs/getTransactions'
import { postTransaction } from '../APIs/postTransaction'
import { putTransaction } from '../APIs/putTransaction'
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
            setTransactions(prevTransactions =>
                prevTransactions.concat(registeredTransaction).sort(function (a, b) {
                    return new Date(b.date).getTime() - new Date(a.date).getTime()
                }),
            )
        } catch ({ response }) {
            console.error(response)
        } finally {
            setLoadingTransactions(false)
        }
    }
    const updateTransaction = async (transaction: Omit<ITransaction, 'id'>, id: number) => {
        try {
            setLoadingTransactions(true)
            const updatedTransaction = await putTransaction(transaction, id)
            setTransactions(prevTransactions =>
                prevTransactions
                    .map(prevTransaction => {
                        if (prevTransaction.id === id) return updatedTransaction
                        return prevTransaction
                    })
                    .sort(function (a, b) {
                        return new Date(b.date).getTime() - new Date(a.date).getTime()
                    }),
            )
        } catch ({ response }) {
            console.error(response)
        } finally {
            setLoadingTransactions(false)
        }
    }
    const removeTransaction = async (id: number) => {
        try {
            setLoadingTransactions(true)
            await deleteTransaction(id)
            setTransactions(prevTransactions =>
                prevTransactions
                    .filter(prevTransaction => prevTransaction.id !== id)
                    .sort(function (a, b) {
                        return new Date(b.date).getTime() - new Date(a.date).getTime()
                    }),
            )
        } catch ({ response }) {
            console.error(response)
        } finally {
            setLoadingTransactions(false)
        }
    }

    useEffect(() => {
        getTransactionsData()
    }, [])

    return { loadingTransactions, transactions, setTransaction, updateTransaction, removeTransaction }
}
