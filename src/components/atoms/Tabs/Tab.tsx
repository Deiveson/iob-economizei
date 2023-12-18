import React, { FunctionComponent, useCallback, useEffect, useState } from 'react'

import { ITab } from './interface/ITab'
import { TabContainer } from './tabs.styles'

export const Tab: FunctionComponent<ITab> = ({ children, onTabSelected, defaultActive }) => {
    const [itemId, setItemId] = useState()

    useEffect(() => {
        setItemId(defaultActive)
    }, [defaultActive])

    const selected = useCallback((value: any) => value === itemId, [itemId])

    return (
        <TabContainer>
            {React.Children.map(children, child => {
                return React.cloneElement(child, {
                    onClick: () => {
                        setItemId(child.props.value)
                        onTabSelected(child.props.value)
                    },
                    selected: selected(child.props.value),
                })
            })}
        </TabContainer>
    )
}
