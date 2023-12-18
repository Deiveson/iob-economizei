import { Link } from 'react-router-dom'

import { useTransactionsContext } from 'context/TransactionsContext'
import { FaChevronRight, FaLandmark } from 'react-icons/fa6'

import { ValueViewer } from 'components/molecules/ValueViewer'
import { URIs } from 'router/URIs'

import {
    CurrentBalanceContainer,
    CurrentBalanceHeader,
    CurrentBalanceTitle,
    CurrentBalanceValue,
    CurrentBalanceValueDetails,
    CurrentBalanceValueViewers,
} from './current-balance.styles'

export const CurrentBalance = () => {
    const { formattedBalance, gains, expenses } = useTransactionsContext()

    return (
        <CurrentBalanceContainer>
            <CurrentBalanceHeader>
                <CurrentBalanceTitle>Saldo Atual</CurrentBalanceTitle>
                <FaLandmark color="#fff" size="24px" />
            </CurrentBalanceHeader>
            <CurrentBalanceValue>{formattedBalance}</CurrentBalanceValue>
            <CurrentBalanceValueViewers>
                <ValueViewer value={gains} description="Ganhos do mês" />
                <ValueViewer value={expenses} description="Gastos do mês" negative />
            </CurrentBalanceValueViewers>
            <CurrentBalanceValueDetails>
                <Link to={URIs.Transactions}>
                    Detalhes <FaChevronRight />
                </Link>
            </CurrentBalanceValueDetails>
        </CurrentBalanceContainer>
    )
}
