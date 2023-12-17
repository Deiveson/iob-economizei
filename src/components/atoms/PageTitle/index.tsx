import { FunctionComponent, PropsWithChildren } from 'react'

import { PageTitleStyles } from './page-title.styles'

export const PageTitle: FunctionComponent<PropsWithChildren> = ({ children }) => {
    return <PageTitleStyles>{children}</PageTitleStyles>
}
