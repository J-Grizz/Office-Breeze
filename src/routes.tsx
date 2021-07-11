import { FC, useContext } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Redirect } from 'react-router'
import { Home } from 'Views'
import { ProtectedRoute, SignIn } from 'Components'
import { AuthContext } from 'Context/auth.context'

const Routes: FC = () => {
	const { user, loading } = useContext(AuthContext)
	const defaultProtectedRouteProps = {
		isLoading: loading,
		isAuthenticated: Boolean(user),
		authenticationPath: '/sign-in',
	}
	return (
		<Router>
			<Switch>
				<Route exact path="/sign-in" component={SignIn} />
				<ProtectedRoute {...defaultProtectedRouteProps} exact path="/home" component={Home} />
				<ProtectedRoute {...defaultProtectedRouteProps} path="*">
					<Redirect to="/home" />
				</ProtectedRoute>
			</Switch>
		</Router>
	)
}

export default Routes
