import { IRoutes } from '../../router/types'
import { lazy } from 'react'

const Login = lazy(() => import('../Auth/pages/Login'))

const LoginRoutes: IRoutes = [
	{
		name: 'Login',
		routeProps: {
			element: <Login />,
			path: '/login',
		},
	},
]

export default LoginRoutes
