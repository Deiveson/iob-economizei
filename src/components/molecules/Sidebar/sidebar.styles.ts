import styled from 'styled-components'

export const SidebarContainer = styled.div`
    box-sizing: border-box;
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    flex-direction: column;
    width: 300px;
    height: 100vh;
    padding: 64px 30px 24px 30px;
`
export const SidebarLogo = styled.img`
    width: 140px;
`

export const SidebarItems = styled.ul`
    width: 100%;
    margin-top: 58px;
`

export const SidebarItemContainer = styled.li`
    width: 100%;
    display: grid;
    grid-template-columns: 60px 1fr;
    padding: 24px 0;
    cursor: pointer;
    &:hover {
        p {
            color: ${props => props.theme.palette.primary.main};
        }
    }
`

export const SidebarItemIcon = styled.span`
    margin-right: 38px;
`
export const SidebarItemDescription = styled.p<{ active: boolean }>`
    font-size: 16px;
    font-weight: 500;
    color: ${props => (props.active ? props.theme.palette.primary.main : '#000')};
`
