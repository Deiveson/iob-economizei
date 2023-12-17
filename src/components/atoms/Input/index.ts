import InputText from './Input'
import { currency } from './masks'
import withMask from './withMask'

//TODO revalidar currency
const InputCurrency = withMask(InputText, currency)

export { InputCurrency }
export { InputText }
