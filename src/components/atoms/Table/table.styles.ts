import styled from 'styled-components'

import { TransactionsItemType } from '../../../context/TransactionsContext'

export const TableContainer = styled.div`
    display: flex;
    flex-direction: column;
    background: #fefefe;
    box-sizing: border-box;
    position: relative;
    width: 100%;
`

export const TableContainerWrapper = styled.table``

export const TableHeaderContainer = styled.thead`
    margin-bottom: 8px;
`
export const TableHeaderRow = styled.tr`
    display: flex;
    padding-left: 6px;
    margin-bottom: 16px;
`

export const HeaderItem = styled.td`
    flex: 1;
`

export const TableBodyContainer = styled.tbody``

export const TableRow = styled.tr<{ justifyContent?: string }>`
    display: flex;
    align-items: stretch;
    min-height: 52px;
    border-top: none;
    justify-content: ${props => (props.justifyContent ? props.justifyContent : 'unset')}};
`

export const TableItem = styled.td`
    display: flex;
    align-items: center;
    flex: 1;
    min-height: 48px;
    padding: 8px 6px;
`

export const CurrencyItem = styled.span<{ type: TransactionsItemType }>`
    color: ${({ type, theme }) => (type === TransactionsItemType.GAIN ? theme.palette.success.main : theme.palette.error.main)};
    font-weight: 500;
`
