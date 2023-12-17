import { FunctionComponent, ButtonHTMLAttributes, PropsWithChildren } from 'react'

import { StyledButton } from './button.styles'

//TODO Melhorar esse botão ai
export const Button: FunctionComponent<PropsWithChildren<ButtonHTMLAttributes<HTMLButtonElement>>> = ({ children, ...props }) => {
    return <StyledButton {...props}>{children}</StyledButton>
}
