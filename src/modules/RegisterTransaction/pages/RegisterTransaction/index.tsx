import { useParams } from 'react-router-dom'

import { TransactionsItemType, TRANSACTION_DICTIONARY } from 'context/TransactionsContext'

import { Button } from 'components/atoms/Button'
import { InputCurrency, InputText } from 'components/atoms/Input'
import { PageTitle } from 'components/atoms/PageTitle'
import { Tab, TabItem } from 'components/atoms/Tabs'

import { RegisterTransactionContainer, RegisterTransactionForm, RegisterTransactionTabs } from './register-transaction.styles'

import { useHandleTransaction } from '../../hooks/useHandleTransaction'

export default function RegisterTransaction() {
    const { sendTransaction, handleChange, values, setValues } = useHandleTransaction()
    const { transactionId } = useParams()

    return (
        <RegisterTransactionContainer>
            <PageTitle>Registrar transação</PageTitle>
            <RegisterTransactionTabs>
                <Tab
                    onTabSelected={selectedTab => setValues(oldValues => ({ ...oldValues, type: selectedTab }))}
                    defaultActive={values.type || TransactionsItemType.GAIN}
                >
                    <TabItem value={TransactionsItemType.GAIN}>Ganho</TabItem>
                    <TabItem value={TransactionsItemType.SPENT}>Gasto</TabItem>
                </Tab>
            </RegisterTransactionTabs>
            <RegisterTransactionForm
                onSubmit={e => {
                    e.preventDefault()
                    sendTransaction()
                }}
            >
                <InputCurrency onKeyUp={handleChange} name="value" label="valor" defaultValue={values.value} required />
                <InputText onKeyUp={handleChange} name="description" defaultValue={values.description} label="descrição" required />
                <Button type="submit">
                    {transactionId ? 'Atualizar' : 'Registrar'} {TRANSACTION_DICTIONARY[values.type]}
                </Button>
            </RegisterTransactionForm>
        </RegisterTransactionContainer>
    )
}
