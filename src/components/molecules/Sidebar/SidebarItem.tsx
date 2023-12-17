import { FunctionComponent } from 'react'
import { useNavigate } from 'react-router-dom'

import { themeAttributes } from 'theme/themeAttributes'

import { ISidebarItemProps } from './interfaces/ISidebarItemProps'
import { SidebarItemContainer, SidebarItemDescription, SidebarItemIcon } from './sidebar.styles'

const SidebarItem: FunctionComponent<ISidebarItemProps> = ({ uri, Icon, description, active }) => {
    const navigate = useNavigate()

    return (
        <SidebarItemContainer onClick={() => navigate(uri)}>
            <SidebarItemIcon>
                <Icon color={active ? themeAttributes.palette.primary.main : themeAttributes.palette.text.main} size="20px" />
            </SidebarItemIcon>
            <SidebarItemDescription active={active}>{description}</SidebarItemDescription>
        </SidebarItemContainer>
    )
}
export default SidebarItem
