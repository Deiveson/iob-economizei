import { IRoutes } from '../../router/types'
import { lazy } from 'react'

const Dashboard = lazy(() => import('../Dashboard/pages/Dashboard'))

const LoginRoutes: IRoutes = [
	{
		name: 'Dashboard',
		routeProps: {
			element: <Dashboard />,
			path: '/',
		},
	},
]

export default LoginRoutes
