import { lazy } from 'react'

import { IRoutes } from 'router/types'

const Transactions = lazy(() => import('./pages/Transactions'))

const TransactionsRoutes: IRoutes = [
    {
        name: 'Transactions',
        routeProps: {
            element: <Transactions />,
            path: '/transactions',
        },
    },
]

export default TransactionsRoutes
