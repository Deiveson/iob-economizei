import styled from 'styled-components'

export const CurrentBalanceContainer = styled.div`
    width: 100%;
    padding: 16px;
    background: ${props => props.theme.palette.primary.main};
    border-radius: ${props => props.theme.shape.borderRadius};
`
export const CurrentBalanceHeader = styled.p`
    width: 100%;
    display: flex;
    justify-content: space-between;
`
export const CurrentBalanceTitle = styled.p`
    font-size: 24px;
    color: #fff;
    font-weight: 500;
`
export const CurrentBalanceValue = styled(CurrentBalanceTitle)`
    font-size: 36px;
    margin-top: 24px;
`
export const CurrentBalanceValueViewers = styled.div`
    display: flex;
    gap: 8px;
    margin-top: 24px;
`
export const CurrentBalanceValueDetails = styled.div`
    display: flex;
    justify-content: flex-end;
    width: 100%;
    padding: 24px 0 16px 0;
    a {
        display: flex;
        gap: 16px;
        align-items: center;
        text-decoration: none;
        font-size: 16px;
        color: #fff;
        font-weight: 600;
    }
`
