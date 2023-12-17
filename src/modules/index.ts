import DashboardRoutes from './Dashboard/routes'
import RegisterTransactionRoutes from './RegisterTransaction/routes'

import { IRoutes } from '../router/types'

const moduleRoutes: IRoutes = [...DashboardRoutes, ...RegisterTransactionRoutes]

export default moduleRoutes
