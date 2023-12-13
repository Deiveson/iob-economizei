import {FaChartBar, FaFileInvoiceDollar, FaPlus} from "react-icons/fa6";
import logo from 'assets/logo.svg';
import {SidebarContainer, SidebarItems, SidebarLogo} from "./sidebar.styles";
import SidebarItem from "./SidebarItem";
import {URIs} from "router/URIs";

const Sidebar = () => {
	return (
		<SidebarContainer>
			<SidebarLogo src={logo} />
			<SidebarItems>
				<SidebarItem active={true} Icon={FaChartBar} description="Início" uri={URIs.Dashboard}/>
				<SidebarItem active={false} Icon={FaPlus} description="Registrar transação" uri={URIs.ExpensesGains}/>
				<SidebarItem active={false} Icon={FaFileInvoiceDollar} description="Extrato" uri={URIs.Transactions}/>
			</SidebarItems>
		</SidebarContainer>
	)
}
export default Sidebar
