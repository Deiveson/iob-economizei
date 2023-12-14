import { IExtractItem } from './IExtractItem'

export interface IExtractContext {
    extract: Array<IExtractItem>
    loadingExtract: boolean
    balance: number
    gains: number
    spents: number
    formattedBalance: string
    formattedGains: string
    formattedSpents: string
}
