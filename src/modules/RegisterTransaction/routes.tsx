import { lazy } from 'react'

import { IRoutes } from 'router/types'
import { URIs } from 'router/URIs'

const RegisterTransaction = lazy(() => import('./pages/RegisterTransaction'))

const TransactionRoutes: IRoutes = [
    {
        name: 'RegisterTransaction',
        routeProps: {
            element: <RegisterTransaction />,
            path: URIs.RegisterTransaction,
        },
    },
    {
        name: 'UpdateTransaction',
        routeProps: {
            element: <RegisterTransaction />,
            path: `${URIs.UpdateTransaction}/:transactionId`,
        },
    },
]

export default TransactionRoutes
