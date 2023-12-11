import { Routes, Route } from 'react-router-dom'
import routes from '../modules'
import { PrivateRoute } from './guards/PrivateRoute'
import { Suspense } from 'react'

export const Router = () => (
	<Suspense fallback={<div>carregando...</div>}>
		<Routes>
			{routes.map(route =>
				route.private ? (
					<PrivateRoute {...route.routeProps} key={route.name} />
				) : (
					<Route {...route.routeProps} key={route.name} />
				),
			)}
		</Routes>
	</Suspense>
)
