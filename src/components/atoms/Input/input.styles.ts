import styled from 'styled-components'

export const InputContainer = styled.div`
    width: 100%;
`
export const InputField = styled.input`
    width: 100%;
    font-size: 16px;
    height: 50px;
    font-weight: 400;
    border: 1px solid #d0d5dd;
    box-shadow: 0 1px 2px rgba(16, 24, 40, 0.05);
    border-radius: 8px;
    padding: 10px 14px;

    &::placeholder {
        font-size: 16px;
        font-weight: 400;
    }

    &:focus {
        outline: none;
    }
`

export const Label = styled.label`
    font-weight: 600;
    font-size: 12px;
    display: block;
    margin-bottom: 8px;
`
