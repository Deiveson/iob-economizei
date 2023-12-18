import styled from 'styled-components'
export const ValueViewerContainer = styled.span`
    display: grid;
    grid-template:
        'icon currency' 1fr
        'icon description' 1fr
        / 60px 1fr;
    width: 100%;
    padding: 16px 16px 16px 0;
    background: #fff;
    border-radius: ${props => props.theme.shape.borderRadius};
`

export const ValueViewerIcon = styled.div`
    grid-area: icon;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 18px;
    font-weight: 500;
`
export const ValueViewerCurrency = styled.p`
    grid-area: currency;
    font-size: 18px;
    font-weight: 500;
`
export const ValueViewerDescription = styled.p`
    grid-area: description;
    margin-top: 8px;
    font-size: 14px;
    font-weight: 500;
`
