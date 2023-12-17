import { FunctionComponent, InputHTMLAttributes, useId } from 'react'

import { InputContainer, InputField, Label } from './input.styles'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    label?: string
}

const Input: FunctionComponent<InputProps> = ({ label, ...props }) => {
    const inputId = useId()
    return (
        <InputContainer>
            {label && <Label htmlFor={inputId}>{label}</Label>}
            <InputField {...props} id={inputId} />
        </InputContainer>
    )
}

export default Input
