import { RouteProps } from 'react-router-dom'

interface IRoute {
    name: string
    private?: boolean
    routeProps: RouteProps
}

export type IRoutes = Array<IRoute>
