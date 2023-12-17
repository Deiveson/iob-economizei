import React, { FunctionComponent, PropsWithChildren } from 'react'

import { TabItemStyles } from './tabs.styles'

export const TabItem: FunctionComponent<PropsWithChildren<{value: any}>> = ({ children, ...restProps }) => (
    <TabItemStyles {...restProps}>{children}</TabItemStyles>
)
