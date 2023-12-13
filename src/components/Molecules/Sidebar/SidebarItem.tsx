import {ReactElement, FunctionComponent} from "react";
import {useNavigate} from "react-router-dom";
import {SidebarItemContainer} from "./sidebar.styles";

interface ISidebarItemProps {
    description: string
    uri: string
    icon: ReactElement
}

const SidebarItem: FunctionComponent<ISidebarItemProps> = ({uri, icon, description}) => {
    const navigate = useNavigate()

    return (
        <SidebarItemContainer onClick={() => navigate(uri)}>
            <span>{icon}</span>
            <p>{description}</p>
        </SidebarItemContainer>
    )
}
export default SidebarItem
