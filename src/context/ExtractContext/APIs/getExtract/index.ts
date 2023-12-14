import { httpClient } from 'infra/httpClient'

import { IExtractItem } from '../../interfaces/IExtractItem'

export const getExtract = async (): Promise<Array<IExtractItem>> => {
    const { data } = await httpClient.get(`/extract`)
    return data
}
