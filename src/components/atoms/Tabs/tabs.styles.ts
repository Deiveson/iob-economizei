import styled from 'styled-components'

export const TabContainer = styled.div`
    display: flex;
    width: 100%;
    align-items: stretch;
`

export const TabItemStyles = styled.div<{ selected?: boolean }>`
    background-color: white;
    width: 100%;
    cursor: pointer;
    transition: 0.3s;
    font-weight: 500;
    padding: 16px 0;
    color: ${({ theme, selected }) => (selected ? theme.palette.primary.main : '#000')};
`
