import { useTransactionsContext } from 'context/TransactionsContext'

import { Button } from 'components/atoms/Button'
import { PageTitle } from 'components/atoms/PageTitle'
import { Columns, Table } from 'components/atoms/Table'
import { DateColumn, CurrencyColumn } from 'components/atoms/Table'
import { ValueViewer } from 'components/molecules/ValueViewer'

import { ResumeTitle, TransactionContainer, TransactionValueViewer, TransactionsTable } from './transactions.styles'

export default function Transactions() {
    const { gains, expenses, transactions, loadingTransactions } = useTransactionsContext()
    return (
        <TransactionContainer>
            <PageTitle>Extrato</PageTitle>
            <ResumeTitle>Resumo das transações</ResumeTitle>
            <TransactionValueViewer>
                <ValueViewer value={gains} description="Ganhos" />
                <ValueViewer value={expenses} description="Gastos" negative />
            </TransactionValueViewer>
            <TransactionsTable>
                <Table
                    data={transactions}
                    Skeleton={<div>ds</div>}
                    loading={loadingTransactions}
                    noDataMessage="Não há transações há serem exibidas"
                >
                    <DateColumn dataAttribute="date" description="Data" />
                    <Columns
                        dataAttribute="description"
                        description="Descrição"
                        render={({ description }) => <span>{description}</span>}
                    />
                    <CurrencyColumn dataAttribute={['value', 'type']} description="Valor" />
                    <Columns dataAttribute="id" description="Editar" render={({ id }) => <Button>Editar</Button>} />
                </Table>
            </TransactionsTable>
        </TransactionContainer>
    )
}
