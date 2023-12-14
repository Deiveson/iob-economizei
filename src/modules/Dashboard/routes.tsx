import { lazy } from 'react'

import { IRoutes } from '../../router/types'

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
