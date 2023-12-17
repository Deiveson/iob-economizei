import { ExtractItemType } from '../extract.enums'

export interface ITransaction {
    id: number
    date: string
    description: string
    value: number
    type: ExtractItemType
}
