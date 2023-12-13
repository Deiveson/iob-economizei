import * as React from 'react'

import {DashboardContainer} from './dashboard.styles'
import { CurrentBalance } from "components/organisms/CurrentBalance";
import {useExtractContext} from "context/ExtractContext";

export default function Dashboard() {
	const {extract} = useExtractContext()
	return (
		<DashboardContainer>
			<CurrentBalance />
		</DashboardContainer>
	)
}
