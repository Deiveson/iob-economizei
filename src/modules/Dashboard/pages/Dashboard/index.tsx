import * as React from 'react'

import {DashboardContainer} from './dashboard.styles'
import { CurrentBalance } from "components/organisms/CurrentBalance";

export default function Dashboard() {
	return (
		<DashboardContainer>
			<CurrentBalance />
		</DashboardContainer>
	)
}
