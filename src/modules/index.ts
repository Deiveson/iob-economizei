import AuthRoutes from './Auth/routes'
import { IRoutes } from '../router/types'

const moduleRoutes: IRoutes = [...AuthRoutes] // add here all module routes

export default moduleRoutes
