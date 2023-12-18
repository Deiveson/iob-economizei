import { ITransaction } from 'context/TransactionsContext'

import { httpClient } from 'infra/httpClient'

export const postTransaction = async (transaction: Omit<ITransaction, 'id'>): Promise<ITransaction> => {
    const { data } = await httpClient.post(`/transactions`, transaction)
    return data
}
