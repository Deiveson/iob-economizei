import styled from 'styled-components'

export const StyledButton = styled.button`
    background: ${props => props.theme.palette.primary.main};
    height: 48px;
    border: none;
    color: #fff;
    text-align: center;
    text-decoration: none;
    border-radius: 8px;
    transition: all 0.5s ease-out;
    font-size: 18px;
    float: left;
`
