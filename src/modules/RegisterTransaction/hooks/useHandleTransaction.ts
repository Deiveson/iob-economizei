import { useCallback } from 'react'
import {useNavigate} from "react-router-dom";

import { useExtractContext } from 'context/ExtractContext'

import {URIs} from "router/URIs";

import { IRegisterTransaction } from './interfaces/IRegisterTransaction'

export const useHandleTransaction = () => {
    const { setTransaction } = useExtractContext()
    const navigate = useNavigate()

    const registerTransaction = useCallback(async ({ ...transaction }: IRegisterTransaction) => {
        const date = new Date().toISOString().substring(0, 10)
        await setTransaction({ ...transaction, date, value: Number(transaction.value.replace(/[^0-9,-]+/g, '').replace(/,/, '.')) })
        navigate(URIs.Dashboard)
    }, [setTransaction])

    return { registerTransaction }
}
