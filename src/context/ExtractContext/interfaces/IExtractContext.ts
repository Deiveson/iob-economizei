export interface IExtractItem {
    id: number
    date: string
    description: string
    value: number
    type: 'spent' | 'gain'
}
export interface IExtractContext {
    extract: Array<IExtractItem>
}