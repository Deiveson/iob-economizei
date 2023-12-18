import { lazy } from 'react'

import { IRoutes } from 'router/types'

const RegisterTransaction = lazy(() => import('./pages/RegisterTransaction'))

const TransactionRoutes: IRoutes = [
    {
        name: 'RegisterTransaction',
        routeProps: {
            element: <RegisterTransaction />,
            path: '/register-transaction',
        },
    },
    {
        name: 'RegisterTransaction',
        routeProps: {
            element: <RegisterTransaction />,
            path: '/update-transaction/:transactionId',
        },
    },
]

export default TransactionRoutes
