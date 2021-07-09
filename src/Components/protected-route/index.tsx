import { FC } from 'react'
import { Redirect, Route, RouteProps } from 'react-router'
import { LoadingSpinner } from 'Components'

export type ProtectedRouteProps = {
	isLoading: boolean
	isAuthenticated: boolean
	authenticationPath: string
} & RouteProps

const ProtectedRoute: FC<ProtectedRouteProps> = ({ isLoading, isAuthenticated, authenticationPath, ...routeProps }) => {
	if (isLoading) {
		return <LoadingSpinner />
	} else if (isAuthenticated) {
		return <Route {...routeProps} />
	} else {
		return <Redirect to={{ pathname: authenticationPath }} />
	}
}

export default ProtectedRoute
