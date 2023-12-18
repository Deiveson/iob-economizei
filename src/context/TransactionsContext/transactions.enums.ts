export enum TransactionsItemType {
    SPENT = 'SPENT',
    GAIN = 'GAIN',
}

export const TRANSACTION_DICTIONARY = {
    [TransactionsItemType.SPENT]: 'gasto',
    [TransactionsItemType.GAIN]: 'ganho',
}
