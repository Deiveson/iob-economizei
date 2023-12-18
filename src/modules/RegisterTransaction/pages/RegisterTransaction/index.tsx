import { TransactionsItemType } from 'context/TransactionsContext'

import { Button } from 'components/atoms/Button'
import { InputCurrency, InputText } from 'components/atoms/Input'
import { PageTitle } from 'components/atoms/PageTitle'
import { Tab, TabItem } from 'components/atoms/Tabs'

import { RegisterTransactionContainer, RegisterTransactionForm, RegisterTransactionTabs } from './register-transaction.styles'

//TODO ajustar interfaces do IRegisterTransaction
import { useHandleTransaction } from '../../hooks/useHandleTransaction'

export default function RegisterTransaction() {
    const { sendTransaction, handleChange, values, setValues } = useHandleTransaction()

    return (
        <RegisterTransactionContainer>
            <PageTitle>Registrar transação</PageTitle>
            <RegisterTransactionTabs>
                <Tab
                    onTabSelected={selectedTab => setValues(oldValues => ({ ...oldValues, type: selectedTab }))}
                    defaultActive={values.type || TransactionsItemType.GAIN}
                >
                    <TabItem value={TransactionsItemType.GAIN}>Ganho</TabItem>
                    <TabItem value={TransactionsItemType.EXPENSE}>Gasto</TabItem>
                </Tab>
            </RegisterTransactionTabs>
            <RegisterTransactionForm
                onSubmit={e => {
                    e.preventDefault()
                    sendTransaction(values)
                }}
            >
                <InputCurrency onKeyUp={handleChange} name="value" label="valor" defaultValue={values.value} required />
                <InputText onKeyUp={handleChange} name="description" defaultValue={values.description} label="descrição" required />
                <Button type="submit">Registrar Ganho</Button>
            </RegisterTransactionForm>
        </RegisterTransactionContainer>
    )
}
