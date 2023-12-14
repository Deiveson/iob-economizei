import { FunctionComponent } from 'react'
import { Navigate, Route, RouteProps } from 'react-router-dom'

export const PrivateRoute: FunctionComponent<RouteProps> = ({ ...props }) => {
    const auth = true
    return auth ? <Route {...props} /> : <Navigate to="/login" />
}
