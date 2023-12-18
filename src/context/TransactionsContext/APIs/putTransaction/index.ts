import { ITransaction } from 'context/TransactionsContext'

import { httpClient } from 'infra/httpClient'

export const putTransaction = async (transaction: Omit<ITransaction, 'id'>, id: number): Promise<ITransaction> => {
    const { data } = await httpClient.put(`/transactions/${id}`, transaction)
    return data
}
