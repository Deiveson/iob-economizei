import { lazy } from 'react'

import { IRoutes } from 'router/types'
import { URIs } from 'router/URIs'

const Transactions = lazy(() => import('./pages/Transactions'))

const TransactionsRoutes: IRoutes = [
    {
        name: 'Transactions',
        routeProps: {
            element: <Transactions />,
            path: URIs.Transactions,
        },
    },
]

export default TransactionsRoutes
