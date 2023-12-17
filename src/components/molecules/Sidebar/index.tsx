import { useLocation } from 'react-router-dom'

import { FaChartBar, FaFileInvoiceDollar, FaPlus } from 'react-icons/fa6'

import { URIs } from 'router/URIs'

import logo from 'assets/logo.svg'

import { SidebarContainer, SidebarItems, SidebarLogo } from './sidebar.styles'
import SidebarItem from './SidebarItem'

const Sidebar = () => {
    const { pathname } = useLocation()
    return (
        <SidebarContainer>
            <SidebarLogo src={logo} />
            <SidebarItems>
                <SidebarItem
                    active={Boolean(pathname === URIs.Dashboard)}
                    Icon={FaChartBar}
                    description="Início"
                    uri={URIs.Dashboard}
                />
                <SidebarItem
                    active={Boolean(pathname === URIs.RegisterTransaction)}
                    Icon={FaPlus}
                    description="Registrar transação"
                    uri={URIs.RegisterTransaction}
                />
                <SidebarItem
                    active={Boolean(pathname === URIs.Transactions)}
                    Icon={FaFileInvoiceDollar}
                    description="Extrato"
                    uri={URIs.Transactions}
                />
            </SidebarItems>
        </SidebarContainer>
    )
}
export default Sidebar
