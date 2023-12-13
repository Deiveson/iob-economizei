import {
    CurrentBalanceContainer,
    CurrentBalanceHeader,
    CurrentBalanceTitle,
    CurrentBalanceValue,
    CurrentBalanceValueDetails,
    CurrentBalanceValueViewers
} from "./current-balance.styles";
import {FaChevronRight, FaLandmark} from "react-icons/fa6";
import {ValueViewer} from "components/molecules/ValueViewer";
import {URIs} from "router/URIs";
import {Link} from "react-router-dom";

export const CurrentBalance = () => {
    return (
        <CurrentBalanceContainer>
            <CurrentBalanceHeader>
                <CurrentBalanceTitle>Saldo Atual</CurrentBalanceTitle>
                <FaLandmark color="#fff" size="24px"/>
            </CurrentBalanceHeader>
            <CurrentBalanceValue>10.000,00</CurrentBalanceValue>
            <CurrentBalanceValueViewers>
                <ValueViewer value={2000} description='Ganhos do mês' />
                <ValueViewer value={1000} description='Gastos do mês' negative />
            </CurrentBalanceValueViewers>
            <CurrentBalanceValueDetails>
                <Link to={URIs.Transactions}> Detalhes <FaChevronRight /></Link>
            </CurrentBalanceValueDetails>
        </CurrentBalanceContainer>
    )
}
