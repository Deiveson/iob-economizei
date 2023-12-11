import {Navigate, Route, RouteProps} from 'react-router-dom'
import { FunctionComponent } from 'react'

export const PrivateRoute: FunctionComponent<RouteProps> = ({  ...props }) => {
	const auth = true
	return auth ? <Route {...props} /> : <Navigate to="/login" />
}