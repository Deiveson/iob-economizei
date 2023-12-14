import { ExtractItemType } from '../extract.enums'

export interface IExtractItem {
    id: number
    date: string
    description: string
    value: number
    type: ExtractItemType
}
