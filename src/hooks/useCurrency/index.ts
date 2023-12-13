import {useMemo } from 'react';
import {CODE} from "./currency-codes.constants";
import {IUseBRLCurrencyParams} from "./interfaces/IUseBRLCurrencyParams";

export const useCurrency = ({value, locale = navigator.language}: IUseBRLCurrencyParams): string => {
    const format = useMemo(() => {
        const currency = CODE[locale.substring(-2)] || 'BRL';

        return new Intl.NumberFormat(locale, {
            style: 'currency',
            currency
        });
    }, [locale]);

    return useMemo(() => format.format(value), [value, format]);
};