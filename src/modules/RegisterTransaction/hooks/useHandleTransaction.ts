import { useCallback, useEffect, useMemo, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

import { TransactionsItemType, useTransactionsContext } from 'context/TransactionsContext'

import { URIs } from 'router/URIs'

import { IRegisterTransaction } from './interfaces/IRegisterTransaction'

import { getTransaction } from '../../../context/TransactionsContext/APIs/getTransaction'

export const useHandleTransaction = () => {
    //No mundo real eu dividiria esta lógica, mas não tive muito tempo pra fazer este teste durante a semana

    const date = useMemo(() => {
        const tzoffset = new Date().getTimezoneOffset() * 60000
        return new Date(Date.now() - tzoffset).toISOString().slice(0, -1).substring(0, 10)
    }, [])

    const { setTransaction, updateTransaction } = useTransactionsContext()

    const [values, setValues] = useState<IRegisterTransaction>({ value: '', description: '', type: TransactionsItemType.GAIN })

    const { transactionId } = useParams()
    const navigate = useNavigate()

    const registerTransaction = useCallback(async () => {
        await setTransaction({
            ...values,
            date,
            value: Number(values.value.replace(/[^0-9,-]+/g, '').replace(/,/, '.')),
        })
        navigate(URIs.Dashboard)
    }, [date, navigate, setTransaction, values])

    const editTransaction = useCallback(
        async (id: number) => {
            await updateTransaction(
                {
                    ...values,
                    date,
                    value: Number(values.value.replace(/[^0-9,-]+/g, '').replace(/,/, '.')),
                },
                id,
            )
            navigate(URIs.Dashboard)
        },
        [date, navigate, updateTransaction, values],
    )

    const sendTransaction = useCallback(() => {
        if (transactionId) {
            editTransaction(Number(transactionId))
        } else {
            registerTransaction()
        }
    }, [editTransaction, registerTransaction, transactionId])

    const getTransactionData = useCallback(async (id: number) => {
        try {
            const transactionData = await getTransaction(id)
            setValues(transactionData)
        } catch (e) {
            console.error(e)
        }
    }, [])

    const handleChange = useCallback(e => {
        const { name, value } = e.currentTarget
        setValues(oldValues => ({ ...oldValues, [name]: value }))
    }, [])

    useEffect(() => {
        if (transactionId) {
            getTransactionData(Number(transactionId))
        }
    }, [])

    return { handleChange, sendTransaction, values, setValues }
}
