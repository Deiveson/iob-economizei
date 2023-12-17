import { lazy } from 'react'

import { IRoutes } from 'router/types'

const RegisterTransaction = lazy(() => import('./pages/RegisterTransaction'))

const LoginRoutes: IRoutes = [
    {
        name: 'RegisterTransaction',
        routeProps: {
            element: <RegisterTransaction />,
            path: '/register-transaction',
        },
    },
]

export default LoginRoutes
