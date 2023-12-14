import { CurrentBalance } from 'components/organisms/CurrentBalance'

import { DashboardContainer } from './dashboard.styles'

export default function Dashboard() {
    return (
        <DashboardContainer>
            <CurrentBalance />
        </DashboardContainer>
    )
}
