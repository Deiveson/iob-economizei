import { useCallback } from 'react'

const withMask = (WrappedComponent, maskFunction) => {
    return props => {
        const handleEvent = useCallback(e => {
            maskFunction(e)
        }, [])

        return <WrappedComponent {...props} onChange={handleEvent} />
    }
}

export default withMask
