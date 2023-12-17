import { ITransaction } from 'context/ExtractContext'

import { httpClient } from 'infra/httpClient'

export const postTransaction = async (transaction: Omit<ITransaction, 'id'>): Promise<ITransaction> => {
    const { data } = await httpClient.post(`/extract`, transaction)
    return data
}
