import DashboardRoutes from './Dashboard/routes'
import RegisterTransactionRoutes from './RegisterTransaction/routes'
import TransactionsRoutes from './Transactions/routes'

import { IRoutes } from '../router/types'

const moduleRoutes: IRoutes = [...DashboardRoutes, ...RegisterTransactionRoutes, ...TransactionsRoutes]

export default moduleRoutes
