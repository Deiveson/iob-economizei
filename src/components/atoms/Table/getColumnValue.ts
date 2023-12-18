export const getColumnValue = (data: any, dataAttribute: string | string[]): any => {
    if (!data) return {}

    if (typeof dataAttribute === 'string') return { [dataAttribute]: data[dataAttribute] }

    const value = {}

    dataAttribute.forEach(attribute => {
        value[attribute] = data[attribute]
    })

    return value
}
