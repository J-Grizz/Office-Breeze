import { FC } from 'react'
import { Redirect, Route, RouteProps } from 'react-router'
import { LoadingSpinner } from 'Components'

type ProtectedRouteProps = {
	isLoading: boolean
	isAuthenticated: boolean
	authenticationPath: string
} & RouteProps

const ProtectedRoute: FC<ProtectedRouteProps> = ({ isLoading, isAuthenticated, authenticationPath, ...routeProps }) => {
	// Ensure user is logged in to access route, else redirect to sign in
	if (isLoading) {
		return <LoadingSpinner />
	} else if (isAuthenticated) {
		return <Route {...routeProps} />
	} else {
		return <Redirect to={{ pathname: authenticationPath }} />
	}
}

export default ProtectedRoute
