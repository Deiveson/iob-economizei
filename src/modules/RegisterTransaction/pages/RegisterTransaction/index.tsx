import { useCallback, useState } from 'react'

import { ExtractItemType } from 'context/ExtractContext'

import { Button } from 'components/atoms/Button'
import { InputCurrency, InputText } from 'components/atoms/Input'
import { PageTitle } from 'components/atoms/PageTitle'
import { Tab, TabItem } from 'components/atoms/Tabs'

import { RegisterTransactionContainer, RegisterTransactionForm, RegisterTransactionTabs } from './register-transaction.styles'

//TODO ajustar interfaces do IRegisterTransaction
import { IRegisterTransaction } from '../../hooks/interfaces/IRegisterTransaction'
import { useHandleTransaction } from '../../hooks/useHandleTransaction'

export default function RegisterTransaction() {
    const [values, setValues] = useState<IRegisterTransaction>({ value: '', description: '', type: ExtractItemType.GAIN })

    const handleChange = useCallback((e) => {
        const { name, value } = e.currentTarget
        setValues(oldValues => ({ ...oldValues, [name]: value }))
    }, [])

    const { registerTransaction } = useHandleTransaction()

    return (
        <RegisterTransactionContainer>
            <PageTitle>Registrar transação</PageTitle>
            <RegisterTransactionTabs>
                <Tab onTabSelected={selectedTab => setValues(oldValues => ({ ...oldValues, type: selectedTab }))} defaultActive={ExtractItemType.GAIN}>
                    <TabItem value={ExtractItemType.GAIN}>Ganho</TabItem>
                    <TabItem value={ExtractItemType.EXPENSE}>Gasto</TabItem>
                </Tab>
            </RegisterTransactionTabs>
            <RegisterTransactionForm
                onSubmit={e => {
                    e.preventDefault()
                    registerTransaction(values)
                }}
            >
                <InputCurrency onKeyUp={handleChange} name="value" label="valor" required />
                <InputText onKeyUp={handleChange} name="description" label="descrição" required />
                <Button type="submit">Registrar Ganho</Button>
            </RegisterTransactionForm>
        </RegisterTransactionContainer>
    )
}
