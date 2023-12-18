
import { httpClient } from 'infra/httpClient'

import {IRegisterTransaction} from "../../hooks/interfaces/IRegisterTransaction";

export const getTransaction = async (id: number): Promise<IRegisterTransaction> => {
    const { data } = await httpClient.get(`/transactions/${id}`)
    return data
}
