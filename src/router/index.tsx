import { Suspense } from 'react'
import { Routes, Route } from 'react-router-dom'

import { PrivateRoute } from './guards/PrivateRoute'

import routes from '../modules'

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
