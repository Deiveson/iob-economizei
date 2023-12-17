import { httpClient } from 'infra/httpClient'

import { ITransaction } from '../../interfaces/ITransaction'

export const getExtract = async (): Promise<Array<ITransaction>> => {
    const { data } = await httpClient.get(`/extract`)
    return data
}
