import { FunctionComponent } from 'react'

import { useCurrency } from 'hooks/useCurrency'
import { FaArrowTrendDown, FaArrowTrendUp } from 'react-icons/fa6'
import { themeAttributes } from 'theme/themeAttributes'

import { IValueViewerProps } from './interfaces/IValueViewerProps'
import { ValueViewerContainer, ValueViewerCurrency, ValueViewerDescription, ValueViewerIcon } from './value-viewer.styles'

export const ValueViewer: FunctionComponent<IValueViewerProps> = ({ value, description, negative = false }) => {
    const currency = useCurrency({ value: negative ? Math.abs(value) * -1 : value })

    return (
        <ValueViewerContainer>
            <ValueViewerIcon>
                {negative ? (
                    <FaArrowTrendDown color={themeAttributes.palette.error.main} />
                ) : (
                    <FaArrowTrendUp color={themeAttributes.palette.success.main} />
                )}
            </ValueViewerIcon>
            <ValueViewerCurrency>{currency}</ValueViewerCurrency>
            <ValueViewerDescription>{description}</ValueViewerDescription>
        </ValueViewerContainer>
    )
}
