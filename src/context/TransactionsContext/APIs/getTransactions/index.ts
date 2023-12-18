import { httpClient } from 'infra/httpClient'

import { ITransaction } from '../../interfaces/ITransaction'

export const getTransactions = async (): Promise<Array<ITransaction>> => {
    const { data } = await httpClient.get(`/transactions`)
    return data
}
