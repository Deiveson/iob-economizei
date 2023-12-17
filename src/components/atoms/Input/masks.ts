import { FormEvent } from 'react'

export const currency = (e: FormEvent<HTMLInputElement>): void => {
    let value = e.currentTarget.value
    value = value.replace(/\D/g, '')
    value = value.replace(/(\d)(\d{2}$)/, '$1,$2')
    value = value.replace(/(?=(\d{3})+(\D))\B/g, '.')
    e.currentTarget.value = value
}
