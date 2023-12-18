import { ITransaction } from 'context/TransactionsContext'

import { httpClient } from 'infra/httpClient'

export const deleteTransaction = async (id: number): Promise<ITransaction> => {
    const { data } = await httpClient.delete(`/transactions/${id}`)
    return data
}
