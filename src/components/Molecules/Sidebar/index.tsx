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
				<SidebarItem icon={<FaChartBar size="20px" />} description="Início" uri={URIs.Dashboard}/>
				<SidebarItem icon={<FaPlus size="20px" />} description="Registrar transação" uri={URIs.ExpensesGains}/>
				<SidebarItem icon={<FaFileInvoiceDollar size="20px" />} description="Extrato" uri={URIs.Transactions}/>
			</SidebarItems>
		</SidebarContainer>
	)
}
export default Sidebar
