import { httpClient } from 'infra/httpClient'

import { IRegisterTransaction } from '../../../../modules/RegisterTransaction/hooks/interfaces/IRegisterTransaction'

export const getTransaction = async (id: number): Promise<IRegisterTransaction> => {
    const { data } = await httpClient.get(`/transactions/${id}`)
    return { value: data.value.toString(), description: data.description, type: data.type }
}
